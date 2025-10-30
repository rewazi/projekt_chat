<?php
require __DIR__ . '/vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use MariaDb\Connector\Connection;

class ChatServer implements MessageComponentInterface {
    protected $clients;
    protected $db;
    public function __construct() {
        $this->clients = new \SplObjectStorage;

        $this->db = new mysqli("localhost", "root", "", "projekt");
        echo "WebSocket запущен!\n";
}


public function onOpen(ConnectionInterface $conn){
     $this->clients->attach($conn);
    echo "New connection! ({$conn->resourceId})\n";

    $load = $this->db->query("SELECT username, message, created_at FROM chat_test ORDER BY id ASC");
    $history = [];
    while ($row = $load->fetch_assoc()) {
        $history[] = $row;
    }

    $conn->send(json_encode([
        "type" => "history",
        "messages" => $history
    ]));

    } 

    public function onMessage(ConnectionInterface $from, $msg) {
 $data = json_decode($msg, true);
       $push = $this->db->prepare("INSERT INTO chat_test (username, message) VALUES (?, ?)");
       $push->bind_param("ss", $data["username"], $data["message"]);
       $push->execute();
       $newMessage = [
       "type"=> "text",
       "username" => $data["username"],
       "message" => $data["message"],
       "created_at" => date("Y-m-d H:i:s")
      ];
        foreach ($this->clients as $client) {
            $client->send(json_encode($newMessage));
        }
    }


    

    public function onClose(ConnectionInterface $conn) {

        $this->clients->detach($conn);

        echo "Connection {$conn->resourceId} has disconnected\n";

    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e->getMessage()}\n";
        $conn->close();
    }
  }

$server = \Ratchet\Server\IoServer::factory(
    new \Ratchet\Http\HttpServer(
        new \Ratchet\WebSocket\WsServer(
            new ChatServer()
        )
    ),
    8080 
);
$server->run();
?>
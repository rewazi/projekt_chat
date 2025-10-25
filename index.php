<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");


  $servername = "localhost";
  $username = "root";
  $password = "";
  $databasename = "projekt";

  // CREATE CONNECTION
  $conn = new mysqli($servername,
    $username, $password, $databasename);

  // GET CONNECTION ERRORS
  if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
  exit();
}

$sql = "SELECT * FROM chat_test";
$result = $conn->query($sql);

$data = [];

if ($result && $result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  echo json_encode($data);
} else {
  echo json_encode([]);
}

$conn->close();

?>
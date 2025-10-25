'use client'

import React, { useEffect, useState } from "react";
import Modal_window from './Modal_window.js';




export default function Get() {


  const [get_request, setget_request] = useState([]);

   useEffect(() => {
      fetch('http://localhost/server/index.php')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setget_request(data);
         })
   }, []);

 return (
    <>
    
      <div className=" flex justify-center bg-black relative">
            <ul> 
                {get_request.map((chat_data) => ( 
                    <li key={chat_data.id} > {chat_data.username} - {chat_data.message} </li>
                ))}
               
            </ul>
      </div>
    </>
  );
}

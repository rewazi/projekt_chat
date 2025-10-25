'use client'
import Get from'./get_post.js'
import React, { useEffect, useState } from "react";
import Modal_window from './Modal_window.js';






export default function Home() {


 return (
    <>
    
   <Modal_window />
   <Get />

    </>
  );
}

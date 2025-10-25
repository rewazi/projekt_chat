'use client'

import React, { useEffect, useState } from "react";


import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, useDraggable} from "@heroui/react";




export default function Modal_window() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const targetRef = React.useRef(null);
  const {moveProps} = useDraggable({targetRef, isDisabled: !isOpen});
  const [username, setUsername] = useState();
  const [get_request, setget_request] = useState([]);

    useEffect(() => {
    onOpen();
  }, [onOpen]);

function handleSignIn() {
  console.log("Введённое имя:", username);
}




 return (
    <>
    
    <div className=" flex justify-center bg-black relative" >
      {/* <Button color="primary" onPress={onOpen}>
        Open Modal
      </Button> */}
      <Modal ref={targetRef} isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col  gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />
               
     
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button color="primary" onPress={handleSignIn}> </Button>
      
      
      </div>
    </>
  );
}

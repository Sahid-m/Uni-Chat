import { useEffect, useState } from 'react';
import { socket } from '../socket Funtions/socket';

export default function Chat() {

    interface messages{
    message: string;
    user: string;
  }
    const [messages,setMessages] = useState<messages[]>([{message: "Test",user: "test User"},{message: "Whats up",user: "test User"},{message: "NOTHING DUDE",user: "test User"}]);
  
  useEffect(() => {
    
    socket.on("error", (error) => {
    console.error("Socket error:", error);
    });
    
    socket.on("connect", () => {
        console.log("connected")
        socket.on("messages", (args:messages[]) => {
          setMessages(args)
        })
    })
  }, [socket])
  

  return (
    <div className="flex flex-wrap justify-between  h-[83vh] max-w-screen-xl p-4 mx-auto">
      <ul className='w-screen h-full overflow-auto'>
          {messages.map((message) => (<li>{message.user} : {message.message}</li>))} 
        </ul>
    </div>
  )
}

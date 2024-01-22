import { useEffect } from 'react';
import Chat from '../components/Chat';
import Input from '../components/Input';
import { socket } from '../socket Funtions/socket';

export default function ChatPage() {

      useEffect(() => {
    socket.on("connected", () => {
      console.log("connnected");
    })
  } , [])

  return (
    <div>
      <Chat />
      <Input />
    </div>
  )
}

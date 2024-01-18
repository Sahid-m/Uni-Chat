import { useState } from 'react';
import './App.css';

function App() {

  interface messages{
    message: string;
    user?: string;
  }

  const [messages, setMessages] = useState<messages[]>([{message: "Test",user: "test User"},{message: "Whats up",user: "test User"},{message: "NOTHING DUDE",user: "test User"}]);

  return (
    <div className=''>
      <div className='flex items-center justify-center w-screen h-screen'>
        <ul className=''>
          {messages.map((message) => (<li key={message.message}>{message.user} : {message.message}</li>))} 
        </ul>
      </div>
      <div className='absolute bottom-0 left-0 w-screen'>
        <form className='w-full h-full'>
          <input className='w-3/4 h-12 p-3 border-2 border-black rounded-lg' type='text' placeholder='Your Message' />
          <input className='w-1/4 h-12 p-3 border-2 border-green-900 rounded-md hover:bg-green-600 hover:text-white bg-lime-300' type='submit' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default App

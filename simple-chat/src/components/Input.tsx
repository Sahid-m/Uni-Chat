import React, { useRef } from 'react';
import { socket } from '../socket Funtions/socket';

export default function Input() {

    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    //@ts-expect-error --> 
    if (!form.current[0].value) {
      alert("Please Dont send black messages")
      return;
    }

    

    if(form.current){
      //@ts-expect-error --> It has property on run time 
      socket.emit("add-message" , {message: form.current[0].value , user: "sahid"} )
      //@ts-expect-error --> 
      form.current[0].value = ""

      socket.on("messagesubmitted", (obj:string) => {
      console.log(obj);
        alert(obj);
        socket.off("messagesubmitted");
      })
      
      
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-2 mx-auto">
      <form ref={form} className='flex flex-wrap items-center justify-between w-full h-full' onSubmit={handleSubmit}>
          <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <button type="submit" className="w-2/12 p-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">Send</button>
        </form>
    </div>
  )
}

import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.json({
    messag: "Server Running", time: process.uptime()})
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

interface messages {
  message: string,
  user: string
}

const users: string[] = ["user1", "sahid"];

const messages: messages[] = [{
  message: "TEST",
  user: "test1"
}]

io.on("connect", (socket) => {


  console.log("User connected with id : " + socket.id)

  io.emit("messages", messages)
  
  socket.on("add-message", (obj:messages) => {
    if (!obj.user) {
      socket.emit("messagesubmitted", "Please Give User to add messages")
    } else {
      if(users.includes(obj.user)) {
      console.log(users.includes(obj.user));
      messages.push(obj);
      console.log(messages);
      io.emit("messages", messages);  
      } else {
        socket.emit("messagesubmitted", "No User Found")
      }  
    }
    
    
  })
}); 

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
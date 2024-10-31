import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import router from "./router.js";  // Import the router module
import cors  from "cors";

dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors()); // This will enable CORS for any origin
app.use(router);  // Use the router middleware

io.on('connection', (socket)=>{ // default parameter
  console.log('a new client connected');


  socket.on('join' ,({name,room},callback)=>{
    
    console.log(name,room);
  })


  socket.on('disconnection' , ()=>{
    console.log('a client disconnected');
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

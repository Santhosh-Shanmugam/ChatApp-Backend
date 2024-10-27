import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import router from "./router.js";  // Import the router module

dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(router);  // Use the router middleware

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

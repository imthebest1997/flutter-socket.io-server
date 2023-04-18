import './sockets/socket.js'

import { Server } from "socket.io";
import dotenv from 'dotenv';
import express from "express"
import { fileURLToPath } from 'url';
import http from 'http'
import path from 'path'
import { setUpSockets } from './sockets/socket.js';

//App de Express
const app = express();
const server = http.createServer(app);
setUpSockets(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

//Path public
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


server.listen(process.env.PORT, (err)=>{
    if(err) throw new Error(err);
    console.log("Server is running on port", process.env.PORT);
});




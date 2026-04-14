
import {createServer} from 'http'
import { Server } from 'socket.io'
import {YSocketIO} from 'y-socket.io/dist/server'
import 'dotenv/config';

import express from 'express'


const app=express()
const httpServer=createServer(app);

const io=new Server(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})

const ysocketIO=new YSocketIO(io)
ysocketIO.initialize()


app.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello world"
    })
})

httpServer.listen(process.env.PORT,()=>{
    console.log(`server is runnig on PORT ${process.env.PORT}`);
    
})
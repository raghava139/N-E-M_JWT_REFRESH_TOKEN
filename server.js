import express from 'express';
import dbConnect from './dbConnect.js';
import pkg from 'dotenv';

//to instance of object call the express and assign to one variable
const app =express();
//dotenv files config
pkg.config()
dbConnect();
//app.use(path,callback)-->It is using for setup middelware for your application
//express.json()-->This method allows to get the json object in request body
app.use(express.json())

//to set Port using env or any port number(8080)
const port= process.env.PORT||8080

//app.listen(port,host,callback)-->it is used to bind and listen the connections on the specified host and port
const server = app.listen(port,()=>console.log(`My Port Number is ${port}`))
server.timeout = 300000;
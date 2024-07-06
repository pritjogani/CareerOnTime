require('dotenv').config();
const express = require('express')
const app = express();
const userrouter = require('./router/userrouter');
const connectdb = require("./utils/db");

app.use(express.json());

app.use("/api/auth",userrouter)




connectdb().then(() =>{

    const port = 5000;
    app.listen(port,() =>{
        console.log(`server is running ${port}`)
    })
    });
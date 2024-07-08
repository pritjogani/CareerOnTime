require('dotenv').config();
const express = require('express')
const app = express();
const userrouter = require('./router/userrouter');
const connectdb = require("./utils/db")
const jobservice = require("./router/jobservice")

app.use(express.json());

app.use("/api/auth",userrouter)
app.use("/api/hr/addjob",jobservice)



connectdb().then(() =>{

    const port = 5000;
    
    app.listen(port,() =>{
        console.log(`server is running ${port}`)
    })
    });
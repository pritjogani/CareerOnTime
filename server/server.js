require('dotenv').config();
const express = require('express')
const app = express();
const userrouter = require('./router/userrouter');
const connectdb = require("./utils/db")
const jobservice = require("./router/jobservice")
const cors = require('cors');
const jobapply = require('./router/jobapplication')


app.use(cors());
app.use(express.json());

app.use("/api/auth",userrouter)
app.use("/api/hr",jobservice)
app.use("/api/job",jobapply);



connectdb().then(() =>{

    const port = 5000;
    
    app.listen(port,() =>{
        console.log(`server is running ${port}`)
    })
    });
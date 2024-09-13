
const express = require('express');
const mongoose = require('mongoose');

const app = express();


//Middleware
app.use("/",(req,res,next)=>{
    res.send("Its working");
})

mongoose.connect("mongodb+srv://Crud_admin:0GKX3JiJMOKGO3nd@cluster0.dqkdy.mongodb.net/")
.then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
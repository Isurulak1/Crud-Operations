
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/UserRoute');


const app = express();


//Middleware
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://Crud_admin:0GKX3JiJMOKGO3nd@cluster0.dqkdy.mongodb.net/")
.then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
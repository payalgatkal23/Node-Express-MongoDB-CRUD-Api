const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/user');

const app=express();
const PORT=3000;

mongoose.connect("mongodb://localhost:27017/crudapp").then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

app.use(express.json());

app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`)
})

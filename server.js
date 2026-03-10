const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/user');

const app=express();

mongoose.connect("mongodb://localhost:27017/crudapp").then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

app.use(express.json());


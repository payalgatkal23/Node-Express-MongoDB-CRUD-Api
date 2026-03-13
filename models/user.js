const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String
});

const student=mongoose.model('cust',userSchema);

module.exports=student;
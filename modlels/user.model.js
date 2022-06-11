const mongoose = require('mongoose')

const userschems = new mongoose.Schema({
    name:{
        type:String,
        required:true},
    age:{
        type:Number,
        required:true},
    email:{
        type:String,
        required:true,},
    password:{
        type:String,
        required:true},
    role:{
        type:String, 
        default:'User',
    },
    token:{type:String}
})


const User = new mongoose.model('User',userschems)


module.exports = User
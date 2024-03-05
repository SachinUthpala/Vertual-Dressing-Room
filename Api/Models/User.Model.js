import mongoose from "mongoose";
import express from 'express';

const userShema = new mongoose.Schema({
    userName : {
        require : true,
        type : String,
        unique : true
    },
    userMail : {
        require : true,
        type : String,
        unique : true 
    },
    userPassword : {
        require : true,
        type : String
    },
    userType : {
        require : true,
        type : String
    }
},{timestamps : true})

const User = mongoose.model('User' , userShema)

export default User;
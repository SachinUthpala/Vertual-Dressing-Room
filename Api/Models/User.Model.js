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
    },
    profileImg : {
        require : true,
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    }
},{timestamps : true})

const User = mongoose.model('User' , userShema)

export default User;
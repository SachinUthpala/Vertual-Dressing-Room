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
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Duser&psig=AOvVaw3Tt72bjEjpTcUQDksEwHm_&ust=1710149982073000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDNvaSz6YQDFQAAAAAdAAAAABAE",
    }
},{timestamps : true})

const User = mongoose.model('User' , userShema)

export default User;
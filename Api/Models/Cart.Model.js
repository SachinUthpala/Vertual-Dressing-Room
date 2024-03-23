import mongoose from "mongoose";
import express from "express";

const  cartShema = new mongoose.Schema({
    userMail :{
        require : true,
        type : String
    },
    clothBrand : {
        require : true,
        type :String
    },
    clothType : {
        require : true,
        type : String
        //this is to define cloth matching for men or femail
    },
    clothPrice : {
        require : true,
        type : Number,
        default : 0
    },
    clothQuntity : {
        require : true,
        type : Number,
        default : 1
    },
    clothImage : {
        require : true,
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    }
} , {timestamps : true});

const Cart = mongoose.model('Cloth' , cartShema);

export default Cloth;
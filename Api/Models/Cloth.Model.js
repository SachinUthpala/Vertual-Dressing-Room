import mongoose from "mongoose";
import express from "express";

const  clothShema = new mongoose.Schema({
    clothName :{
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
    clothSize : {
        require : true,
        type : String,
        default : S
    },
    clothAvailability : {
        require : true,
        type : String,
        default : "available"
    },
    clothImage : {
        require : true,
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    }
} , {timestamps : true});

const Cloth = mongoose.model('Cloth' , clothShema);

export default Cloth;
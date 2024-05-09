import { mongoose } from "mongoose";

const dressShema = new mongoose.Schema({
    dressName: {
        type : String,
        required : true
    } , 
    genderType: {
        type : String,
        required : true
    } , 
    Discription : {
        type : String,
        required : true
    } ,
    price : {
        type : Number,
        required : true
    } , 
    imageUrl : {
        type : String,
        default : "https://i.pinimg.com/originals/34/43/62/344362655514931456968349828428.jpg",
    }
});

const Dress = mongoose.model("Dress",dressShema);

export default Dress;
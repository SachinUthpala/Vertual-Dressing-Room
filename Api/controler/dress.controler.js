import { errorHandler } from "../utils/error.js"
import Dress from './../models/dress.model.js';

export const create = async (req, res , next) => {

   

    const {dressName ,
         genderType , 
         Discription ,
         price , 
         imageUrl } = req.body;

        const prices = Number(price);
    console.log(req.body);
    
    const dresss = new Dress({
        dressName : dressName ,
         genderType : genderType , 
         Discription : Discription  ,
         price : prices , 
         imageUrl  : imageUrl
    });

    dresss.save().then((result) => {
        res.status(201).json({
            message : "Dress Created Successfully",
            dresss : result
        })
    })

    
}

export const allDress = async (req, res , next) => {
    const dress = await Dress.find();
    res.json(dress);
    console.log(dress);
}
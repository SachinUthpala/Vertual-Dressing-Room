import { errorHandler } from "../utils/error.js"
import Dress from './../models/dress.model.js';

export const create = async (req, res , next) => {

   

    const {dressName ,
         genderType , 
         Discription ,
         price , 
         imageUrl } = req.body;

    console.log(req.body);

    const dresss = new Dress({
        dressName ,
         genderType , 
         Discription ,
         price , 
         imageUrl 
    });

    dresss.save().then((result) => {
        res.status(201).json({
            message : "Dress Created Successfully",
            dresss : result
        }).catch((err) => {
            next(err);
        })
    })

    
}
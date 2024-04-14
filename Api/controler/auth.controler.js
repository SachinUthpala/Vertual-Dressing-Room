
import {errorHandler}  from './../utils/error.js';
import User from './../models/user.model.js';
import bryptjs from 'bcryptjs'

export const signUp = async (req , res , next) => {
    const {
        username , 
        email,
        password
    } = req.body;

    //cheacking
    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
      ) {
        next(errorHandler(400, 'All fields are required'));
      }

    const hashPass = bryptjs.hashSync(password , 10);

    const newUser = new User({
        username,
        email,
        password : hashPass
    });

    try {
        await newUser.save();
        res.json({message : "Signup Sucessfull"});
    } catch (error) {
        next(error)
    }
}


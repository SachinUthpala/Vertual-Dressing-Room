
import User from './../models/user.model.js';
import bryptjs from 'bcryptjs'

export const signUp = async (req , res) => {
    const {
        username , 
        email,
        password
    } = req.body;

    //cheacking
    if(!username || !email || !password || username === ' ' || email === ' ' || password === ' '){
        return res.status(400).json({message : 'all feilds are required'});
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
        res.status(500).json({message : error.message});
    }
}


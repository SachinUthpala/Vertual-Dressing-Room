
import {errorHandler}  from './../utils/error.js';
import User from './../models/user.model.js';
import bcryptjs from 'bcryptjs'; 
import jwt from 'jsonwebtoken'


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


// export const signIn = async (req , res , next) => {
//     const {email , password} = req.body;

//     if(!email || !password || email === ' ' || password === ' '){
//         next(errorHandler(400 , 'All Feilds are required !'));
//     }

//     try {
//         const validUser = await User.findOne({email});
        
//         if(!validUser){
//             next(errorHandler(404 , 'User Not Found'));
//         }

//         const validPassword = bryptjs.compareSync(password , validUser.password);

//         if(!validPassword){
//             return next(errorHandler(400 , 'Invallied Password'));
//         }

//         const token = jwt.sign({
//             id : validUser._id
//         } , process.env.JWT_SECRETKEY );

//         res.status(200).cookie('access_token', token, {
//         httpOnly: true,
//         }).json(validUser)

//     } catch (error) {
//         next(error)
//     }


// } 

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email.trim() === '' || password.trim() === '') {
        return next(errorHandler(400, 'All fields are required!')); // Use return to exit the function
    }

    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(404, 'User Not Found')); // Use return to exit the function
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password); // Corrected spelling of bcryptjs

        if (!validPassword) {
            return next(errorHandler(400, 'Invalid Password')); // Corrected spelling of Invalid
        }

        const token = jwt.sign({
            id: validUser._id
        }, "Sachin");

        const { password : pass , ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error);
    }
};
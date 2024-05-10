
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

    const hashPass = bcryptjs.hashSync(password , 10);

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
            id: validUser._id,
            isAdmin: validUser.isAdmin
        }, "Sachin");

        const { password : pass , ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error);
    }
};







// export const google = async (req, res, next) => {
// };

export const google = async (req , res , next) => {
    const {name , email , googlePhotoUrl} = req.body;

    try {

       const user = await User.findOne({email});
       if(user){
        const token = jwt.sign({id:user._id , isAdmin: user.isAdmin} , "Sachin");
        const { password : pass , ...rest } = user._doc;

        res.status(200).cookie('access_token' , token , {
            httpOnly :true,
        }).json(rest)
       } else{
            const genaratedPassword = Math.random().toString(36).slice(-8);
            const hashPassword = bcryptjs.hashSync(genaratedPassword , 10)

            const newUser = new User({
                username : name.toLowerCase().split(' ').join(''),
                email : email,
                password : hashPassword,
                profilePicture : googlePhotoUrl
            });

            await newUser.save();
            const token = jwt.sign({id:newUser._id , isAdmin:newUser.isAdmin} , "Sachin");
            const { password : pass , ...rest } = newUser._doc;
            res.status(200).cookie('access_token' , token , {
                httpOnly :true,
            }).json(rest)

       } 


    } catch (error) {
        next(error)
    }
}


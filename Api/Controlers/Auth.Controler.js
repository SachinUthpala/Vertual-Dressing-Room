import bcryptjs from 'bcryptjs'
import User from './../Models/User.Model.js';
import jwd from 'jsonwebtoken'

export const signup = async (req , res , next) => {
    console.log(req.body);

    const {userName, userMail , userPassword } = req.body;

    if(!userName || !userMail || !userPassword  || userName === '' || userPassword === ''
    || userMail === ''){
        return res.status(400).json({massage : "All Feilds are required"})
    }

    const hashPassword = bcryptjs.hashSync(userPassword , 10);

    const newUser = new User({
        userName,
        userMail,
        userPassword : hashPassword,
        userType : "false"
    })

    try {
        await newUser.save()
        res.json({
            massage : "Signup Sucessfull"
        })
    } catch (error) {
        next(error)
    }

    // newUser.save().then((req , res) => {
    //     res.json({massage : 'Signup Sucessfull'})
    // }).catch((err) => {
    //     res.status(500).json({massage : err.massage})
    // })
}

export const signin = async (req , res , next) => {
    const {userMail , userPassword} = req.body;

    if(!userMail || !userPassword || userMail === '' || userPassword === ''){
        return res.status(400).json({massage : "All Feilds are required"});
    }

    try {
        
        const validUser = await User.findOne({userMail});
        
        if(!validUser){
            return res.status(404).json({massage : "User not exsist"});
        }
        
        const validPassword = bcryptjs.compareSync(userPassword , validUser.userPassword);

        if(!validPassword){
            return res.status(400).json({massage : "Invalid Password"});
        }

        const token = jwd.sign(
            {
               userId :  validUser._id, userName : validUser.userName,
            },process.env.JWT_SECRET_KEY
        );

        const {userPassword : pass , ...rest} = validUser._doc;

        res.status(200).cookie("access_token" , token , {
            httpOnly : true,
        }).json(rest);

    } catch (error) {
        next(error);
    }
}






export const googleAuth = async (req, res, next) => {
    const { userName, userMail, profileImg } = req.body;

    console.log(userName);

    try {
        const existingUser = await User.findOne({ userMail });
        
        console.log(existingUser)// Corrected the findOne query

        if (existingUser) {
            const token = jwd.sign({ userId: existingUser._id }, process.env.JWT_SECRET_KEY);
            const { userPassword, ...rest } = existingUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true
            }).json(rest);
        } else {
            const generatedPass = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPass = bcryptjs.hashSync(generatedPass, 10);

            const newUser = new User({
                userName: userName,
                userMail: userMail,
                userPassword: hashedPass,
                userType: "false",
                profileImg: profileImg
            });

            await newUser.save();
            const token = jwd.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY);
            const { userPassword, ...rest } = newUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        next(error);
    }
};
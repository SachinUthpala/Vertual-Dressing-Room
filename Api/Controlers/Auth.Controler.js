import bcryptjs from 'bcryptjs'
import User from './../Models/User.Model.js';
export const signup = async (req , res) => {
    console.log(req.body);

    const {userName, userMail , userPassword , userType} = req.body;

    if(!userName || !userMail || !userPassword || !userType || userName === '' || userPassword === '' || userType === '' 
    || userMail === ''){
        return res.status(400).json({massage : "All Feilds are required"})
    }

    const hashPassword = bcryptjs.hashSync(userPassword , 10);

    const newUser = new User({
        userName,
        userMail,
        userPassword : hashPassword,
        userType
    })

    try {
        await newUser.save()
        res.json({
            massage : "Signup Sucessfull"
        })
    } catch (error) {
        res.status(500).json({
            massage : error
        });
    }

    // newUser.save().then((req , res) => {
    //     res.json({massage : 'Signup Sucessfull'})
    // }).catch((err) => {
    //     res.status(500).json({massage : err.massage})
    // })
}
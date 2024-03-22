import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRout from './Routs/User.Rout.js'
import userSignUp from './Routs/Auth.Rout.js'
import clothRout from './Routs/Cloth.Rout.js'

dotenv.config();

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("DDatabase is Connected 🌍");
    }
).catch((err) => {
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server Is Running On Port 3000 ❤️");
})

//routers
app.use('/api/user' , userRout );
app.use('/api/auth' , userSignUp );
app.use('/api/cloth' , clothRout);









//creating a middleware to handle the errors
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
});
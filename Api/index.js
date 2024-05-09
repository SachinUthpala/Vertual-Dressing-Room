import  express  from "express";
import { mongoose } from 'mongoose';
import userRout from './routs/user.rout.js'
import authRout from './routs/auth.rout.js'
import cookieParser from "cookie-parser";
import dressRout from './routs/dress.rout.js';


mongoose.connect('mongodb+srv://gunasekarasuda:IszLHmkg1oFoWoVy@sachin.xeead9z.mongodb.net/?retryWrites=true&w=majority&appName=Sachin'
).then(
    () => {
        console.log("MongoDB Connected");
    }
).catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000 , () => {
    console.log("Server Is Running Port 3000");
});

//create apis
app.use('/api/user' , userRout);
app.use('/api/auth' , authRout);
app.use('/api/cloth' , dressRout);



//for weeor handdling
app.use((err , req , res , next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';

    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
});
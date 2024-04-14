import  express  from "express";
import { mongoose } from 'mongoose';
import userRout from './routs/user.rout.js'


mongoose.connect('mongodb+srv://gunasekarasuda:IszLHmkg1oFoWoVy@sachin.xeead9z.mongodb.net/?retryWrites=true&w=majority&appName=Sachin'
).then(
    () => {
        console.log("MongoDB Connected");
    }
).catch((err) => {
    console.log(err);
})

const app = express();
app.listen(3000 , () => {
    console.log("Server Is Running Port 3000");
});

//create apis
app.use('/api/user' , userRout);
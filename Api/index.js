import express from 'express'
import mongoose from 'mongoose';

const app = express()

app.listen(3000,()=>{
    console.log("Server Is Running On Port 3000 ❤️");
})
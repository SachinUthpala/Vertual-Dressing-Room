import express from 'express';
import { create } from '../controler/dress.controler.js';


const router = express.Router();

router.post('/create' , create);


export default router;
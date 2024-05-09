import express from 'express';
import { allDress, create } from '../controler/dress.controler.js';



const router = express.Router();

router.post('/create' , create);
router.get('/get' , allDress);


export default router;
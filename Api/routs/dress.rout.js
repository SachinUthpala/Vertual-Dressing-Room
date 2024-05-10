import express from 'express';
import { MenDress, allDress, create } from '../controler/dress.controler.js';



const router = express.Router();

router.post('/create' , create);
router.get('/get' , allDress);
router.get('/getMen' , MenDress);



export default router;
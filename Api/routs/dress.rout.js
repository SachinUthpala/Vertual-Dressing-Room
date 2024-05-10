import express from 'express';
import { MenDress, WomenDress, allDress, create } from '../controler/dress.controler.js';



const router = express.Router();

router.post('/create' , create);
router.get('/get' , allDress);
router.get('/getMen' , MenDress);
router.get('/getWomen', WomenDress);



export default router;
import express from 'express';
import { MenDress, WomenDress, allDress, create, DeleteDress, getDress } from '../controler/dress.controler.js';



const router = express.Router();

router.post('/create' , create);
router.get('/get' , allDress);
router.get('/getMen' , MenDress);
router.get('/getWomen', WomenDress);
router.delete('/delete/:id', DeleteDress);
router.get('/getDress/:id' , getDress)



export default router;
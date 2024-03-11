import express from 'express';
import { googleAuth, signin, signup } from '../Controlers/Auth.Controler.js';

const router = express.Router();

router.post('/signup' , signup);
router.post('/signin' , signin);
router.post('/googleAuth' , googleAuth);

export default router
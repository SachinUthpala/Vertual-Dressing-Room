import express from 'express';
import { signup } from '../Controlers/Auth.Controler.js';

const router = express.Router();

router.post('/signup' , signup);

export default router
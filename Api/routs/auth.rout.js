import  express  from 'express';
import {signUp} from './../controler/auth.controler.js';

const router = express.Router();

router.post('/signup' , signUp)

export default router;

import express from 'express'
import { addCloth, test } from './../Controlers/Cloth.Controler.js';

const router = express.Router()

router.get('/test' , test);
router.post('/add' , addCloth);

export default router;
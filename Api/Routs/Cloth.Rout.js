import express from 'express'
import { addCloth, displayAll, oneCloth, test } from './../Controlers/Cloth.Controler.js';

const router = express.Router()

router.get('/test' , test);
router.post('/add' , addCloth);
router.get('/' , displayAll);
router.get('/one/:id' , oneCloth);

export default router;
import express from 'express'
import { addCloth, displayAll, test } from './../Controlers/Cloth.Controler.js';

const router = express.Router()

router.get('/test' , test);
router.post('/add' , addCloth);
router.get('/' , displayAll);

export default router;
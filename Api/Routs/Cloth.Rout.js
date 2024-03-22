import express from 'express'
import { addCloth, deleteCloth, displayAll, oneCloth, test, updateCloth } from './../Controlers/Cloth.Controler.js';

const router = express.Router()

router.get('/test' , test);
router.post('/add' , addCloth);
router.get('/' , displayAll);
router.get('/one/:id' , oneCloth);
router.post('/update/:id' , updateCloth);
router.delete('/delete/:id' , deleteCloth);

export default router;
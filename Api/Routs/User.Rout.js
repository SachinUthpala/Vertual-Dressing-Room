import express from 'express'
import { allUsers, deleteUser, oneUser, test, updateUser } from '../Controlers/User.Controler.js';

const router = express.Router()

router.get('/test' , test)
router.get('/all' , allUsers)
router.get('/:id' , oneUser)
router.post('/update/:id' , updateUser);
router.delete('/delete/:id' , deleteUser)

export default router;
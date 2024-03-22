import express from 'express'
import { allUsers, oneUser, test, updateUser } from '../Controlers/User.Controler.js';

const router = express.Router()

router.get('/test' , test)
router.get('/all' , allUsers)
router.get('/:id' , oneUser)
router.post('/update/:id' , updateUser)

export default router;
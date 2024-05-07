import express from 'express'
import { deleteUser, test, updateUser } from '../controler/user.controler.js';
import  {verifyToken}  from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test' , test)
router.put('/update/:userId', verifyToken , updateUser);
router.delete('/delete/:userId' , verifyToken , deleteUser);

export default router;
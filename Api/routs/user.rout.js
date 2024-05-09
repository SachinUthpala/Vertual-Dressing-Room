import express from 'express'
<<<<<<< HEAD
import { deleteUser, signOut, test, updateUser } from '../controler/user.controler.js';
=======
import { deleteUser, signout, test, updateUser } from '../controler/user.controler.js';
>>>>>>> 519247e4c3bb702ea84a5d11de55f1ab4830d03f
import  {verifyToken}  from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test' , test)
router.put('/update/:userId', verifyToken , updateUser);
router.delete('/delete/:userId' , verifyToken , deleteUser);
<<<<<<< HEAD
router.post('/signOut' , signOut);
=======
router.post('/signout' , signout)
>>>>>>> 519247e4c3bb702ea84a5d11de55f1ab4830d03f

export default router;
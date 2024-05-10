import express from 'express'

import { deleteGest, deleteUser, getAllUsers, signOut, test, updateUser } from '../controler/user.controler.js';


import  {verifyToken}  from '../utils/verifyUser.js';


const router = express.Router();


router.get('/test' , test)
router.put('/update/:userId', verifyToken , updateUser);
router.delete('/delete/:userId' , verifyToken , deleteUser);
router.post('/signOut' , signOut);
router.get('/all' , getAllUsers);
router.delete('/gestdelete/:userId' , deleteGest);




export default router;
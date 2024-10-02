import express from 'express'
import { getUserById, getUserData, postUserData, updateUser,deleteUser} from '../controllers/user.js'
import upload from '../utils/helper.js';


const UserRoute = express.Router();
UserRoute.post('/createUser',upload.single('image'),postUserData);
// UserRoute.post('/createUser',uploads.array('image',10),postUserData);
UserRoute.get('/getUser',getUserData);
UserRoute.get('/get/:id ',getUserById);
UserRoute.put('/UpdateUser/:id',updateUser);
UserRoute.delete('/deleteUser/:id',deleteUser); 

export default UserRoute;
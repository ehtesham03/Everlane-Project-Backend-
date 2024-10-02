import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.js';
import { Middleware, roleBasedmiddleware } from '../middleware/userMiddleware.js';

const regRouter = express.Router();

regRouter.post('/register', registerUser)
regRouter.post('/loginUser', loginUser)
regRouter.post('/logoutUser', Middleware, roleBasedmiddleware(null, "admin", "superAdmin"), logoutUser)

export default regRouter;
import { Router } from 'express';
import signUpController from '../controllers/signupController.js';
import logInController from '../controllers/loginController.js';
import logoutController from '../controllers/logoutController.js';

const authRouter = Router();

authRouter.post('/signup', signUpController);
authRouter.post('/login', logInController);
authRouter.get('/logout', logoutController);


export default authRouter;
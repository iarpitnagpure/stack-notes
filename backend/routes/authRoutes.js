import { Router } from 'express';
import signUpController from '../controllers/signupController.js';

const authRouter = Router();

authRouter.post('/signup', signUpController)

export default authRouter;
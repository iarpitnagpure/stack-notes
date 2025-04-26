import { Router } from 'express';
import addNoteController from '../controllers/addNoteController.js';
import authenticationMiddleware from '../middlewares/authenticatioMiddleware.js';
import getNotesController from '../controllers/getNotesController.js';
import updateNoteController from '../controllers/updateNoteController.js';
import deleteNoteController from '../controllers/deleteNoteController.js';

const noteRouter = Router();

noteRouter.get('/getNotes', authenticationMiddleware, getNotesController);
noteRouter.post('/addNote', authenticationMiddleware, addNoteController);
noteRouter.patch('/updateNote', authenticationMiddleware, updateNoteController);
noteRouter.patch('/deleteNote', authenticationMiddleware, deleteNoteController);

export default noteRouter;
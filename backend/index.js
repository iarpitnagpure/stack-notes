import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config'
import connectToDataBase from './helpers/dbConnection.js';
import authRouter from './routes/authRoutes.js';
import noteRouter from './routes/notesRoutes.js';

const port = 8000 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONT_END_URL, credentials: true }));

app.use('/api/auth/', authRouter);
app.use('/api/notes/', noteRouter);

app.listen(port, () => {
    console.log('Stack Notes App Backend Server Started');
    connectToDataBase();
});


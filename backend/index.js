import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config'
import connectToDataBase from './helpers/dbConnection.js';
import authRouter from './routes/authRoutes.js';

const port = 8000 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/auth/', authRouter);

app.listen(port, () => {
    console.log('Stack Notes App Backend Server Started');
    connectToDataBase();
});


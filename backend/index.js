import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config'
import connectToDataBase from './helpers/dbConnection.js';
import authRouter from './routes/authRoutes.js';
import noteRouter from './routes/notesRoutes.js';

const port = 8000 || process.env.PORT;
// Allow two different origin URL
const allowedOrigins = [
    process.env.NOTES_APP_SHELL_URL,
    process.env.NOTES_PACKAGE_SHELL_URL,
].filter(Boolean);
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`Origin ${origin} not allowed by CORS`));
            }
        },
        credentials: true,
    })
);

app.use('/api/auth/', authRouter);
app.use('/api/notes/', noteRouter);

app.listen(port, () => {
    console.log('Stack Notes App Backend Server Started');
    connectToDataBase();
});


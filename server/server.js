import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './routes/UserRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;
app.use('/api/user', UserRouter);

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
	console.log('Database connection has been established');
});

app.listen(PORT, () => {
	console.log(`Server is listening at port: ${PORT}`);
});

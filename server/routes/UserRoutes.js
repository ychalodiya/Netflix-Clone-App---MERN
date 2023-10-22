import express from 'express';
import { addToLikedMovies } from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post('/add', addToLikedMovies);
UserRouter.get('/add', addToLikedMovies);

export default UserRouter;

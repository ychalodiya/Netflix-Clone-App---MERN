import express from 'express';
import {
	addToLikedMovies,
	getLikedMovies,
} from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post('/add', addToLikedMovies);
UserRouter.get('/liked/:email', getLikedMovies);

export default UserRouter;

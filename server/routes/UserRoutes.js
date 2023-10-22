import express from 'express';
import {
	addToLikedMovies,
	getLikedMovies,
	removeLikedMovies,
} from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post('/add', addToLikedMovies);
UserRouter.get('/liked/:email', getLikedMovies);
UserRouter.put('/delete', removeLikedMovies);

export default UserRouter;

import { UserModel } from '../models/UserModel.js';
const addToLikedMovies = async (req, res) => {
	try {
		const { email, data } = req.body;
		const user = await UserModel.findOne({ email });
		if (user) {
			const { likedMovies } = user;
			const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
			if (!movieAlreadyLiked) {
				await UserModel.findByIdAndUpdate(
					user._id,
					{
						likedMovies: [...user.likedMovies, data],
					},
					{ new: true }
				);
			} else {
				return res.json({ msg: 'Movie already added to the liked list' });
			}
		} else {
			await UserModel.create({ email, likedMovies: [data] });
		}
		return res.json({ msg: 'Movies added successfully' });
	} catch (err) {
		return res.json({ msg: 'Error while adding movie' });
	}
};

const getLikedMovies = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await UserModel.findOne({ email });
		if (user) {
			return res.json({ msg: 'success', movies: user.likedMovies });
		} else {
			return res.json({ msg: 'User with given email not found' });
		}
	} catch (err) {
		return res.json({ msg: 'Error while fetching liked movies list' });
	}
};

const removeLikedMovies = async (req, res) => {
	try {
		const { email, movieId } = req.body;
		const user = await UserModel.findOne({ email });
		if (user) {
			const { likedMovies } = user;
			const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
			if (!movieIndex) return res.json(400).send({ msg: 'Movie not found' });
			likedMovies.splice(movieIndex, 1);

			await UserModel.findByIdAndUpdate(
				user._id,
				{
					likedMovies,
				},
				{ new: true }
			);
			return res.json({ msg: 'Movie Deleted', movies: likedMovies });
		} else {
			await UserModel.create({ email, likedMovies: [data] });
		}
	} catch (err) {
		return res.json({ msg: 'Error while removing liked movie from the list' });
	}
};

export { addToLikedMovies, getLikedMovies, removeLikedMovies };

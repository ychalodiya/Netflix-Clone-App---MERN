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

export { addToLikedMovies };

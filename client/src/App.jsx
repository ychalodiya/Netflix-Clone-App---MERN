import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Player from './pages/Player.jsx';
import Movies from './pages/Movies.jsx';
import TVShows from './pages/TVShows.jsx';
import UserLiked from './pages/UserLiked.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Netflix />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/movies" element={<Movies />} />
				<Route exact path="/tv" element={<TVShows />} />
				<Route exact path="/player" element={<Player />} />
				<Route exact path="/mylist" element={<UserLiked />} />
				<Route exact path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

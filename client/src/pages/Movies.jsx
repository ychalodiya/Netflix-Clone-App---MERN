import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase_config';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import SelectGenre from './SelectGenre';

export default function Movies() {
	const dispatch = useDispatch();
	const [isScrolled, setIsScrolled] = useState(false);
	const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
	const movies = useSelector((state) => state.netflix.movies);
	const genres = useSelector((state) => state.netflix.genres);

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	useEffect(() => {
		if (genresLoaded) dispatch(fetchMovies({ type: 'movie' }));
	}, [genresLoaded]);

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	onAuthStateChanged(firebaseAuth, (current) => {
		// if (current) navigate('/');
	});

	return (
		<Container>
			<div className="navbar">
				<Navbar isScrolled={isScrolled} />
			</div>
			<div className="data">
				<SelectGenre genres={genres} type="movie" />
				{movies.length ? <Slider movies={movies} /> : <NotAvailable />}
			</div>
		</Container>
	);
}

const Container = styled.div`
	.data {
		margin-top: 8rem;
		.not-available {
			text-align: center;
			color: white;
			margin-top: 4rem;
		}
	}
`;

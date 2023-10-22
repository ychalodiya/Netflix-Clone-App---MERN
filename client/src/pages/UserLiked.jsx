import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getUserLikedMovies } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase_config';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function UserLiked() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	const movies = useSelector((state) => state.netflix.movies);

	const [email, setEmail] = useState(undefined);
	onAuthStateChanged(firebaseAuth, (current) => {
		if (current) setEmail(current.email);
		else navigate('/login');
	});

	useEffect(() => {
		if (email) dispatch(getUserLikedMovies(email));
	}, [email]);

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<Container>
			<Navbar isScrolled={isScrolled} />
			<div className="content flex column">
				<h1>My List</h1>
				<div className="grid flex">
					{movies.map((movie, index) => {
						return (
							<Card
								movieData={movie}
								index={index}
								key={movie.id}
								isLiked="true"
							/>
						);
					})}
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	.content {
		margin: 2.3rem;
		margin-top: 8rem;
		gap: 3rem;
		h1 {
			margin-left: 3rem;
		}
		.grid {
			flex-wrap: wrap;
			gap: 1rem;
		}
	}
`;

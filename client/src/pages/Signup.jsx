import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase_config.js';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

const Signup = () => {
	const navigate = useNavigate();
	const [showPasswordField, setShowPasswordField] = useState(false);
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const signUpHandler = async (e) => {
		try {
			const { email, password } = formValues;
			await createUserWithEmailAndPassword(firebaseAuth, email, password);
		} catch (err) {
			console.log(err);
		}
	};

	onAuthStateChanged(firebaseAuth, (current) => {
		if (current) navigate('/');
	});

	return (
		<Container showPasswordField={showPasswordField}>
			<BackgroundImage />
			<div className="content">
				<Header login />
				<div className="body flex column a-center j-center">
					<div className="text flex column">
						<h1>Unlimited movies, TV shows and more.</h1>
						<h4>Watch anywhere. Cancel anytime.</h4>
						<h6>
							Ready to watch? Enter your email to create or restart membership.
						</h6>
					</div>
					<div className="form">
						<input
							type="email"
							placeholder="Email address"
							name="email"
							value={formValues.email}
							onChange={(e) =>
								setFormValues({ ...formValues, email: e.target.value })
							}
						/>
						{showPasswordField && (
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={formValues.password}
								onChange={(e) =>
									setFormValues({ ...formValues, password: e.target.value })
								}
							/>
						)}

						{!showPasswordField && (
							<button onClick={() => setShowPasswordField(true)}>
								Get Started
							</button>
						)}
					</div>
					<button onClick={signUpHandler}>Sign Up</button>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	.content {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 15vh 85vh;
		.body {
			gap: 1rem;
			.text {
				gap: 1rem;
				text-align: center;
				font-size: 2rem;
				h1 {
					padding: 0 25rem;
				}
			}
			.form {
				display: grid;
				grid-template-columns: ${({ showPasswordField }) =>
					showPasswordField ? '1fr 1fr' : '2fr 1fr'};
				width: 60%;
				input {
					color: black;
					border: none;
					padding: 1.5rem;
					font-size: 1.2rem;
					border: 1px solid black;
					&:focus {
						outline: none;
					}
				}
				button {
					padding: 0.5rem 1rem;
					background-color: #e50914;
					border: none;
					cursor: pointer;
					color: white;
					font-weight: bolder;
					font-size: 1.05rem;
				}
			}
			button {
				padding: 0.5rem 1rem;
				background-color: #e50914;
				border: none;
				cursor: pointer;
				color: white;
				border-radius: 0.2rem;
				font-weight: bolder;
				font-size: 1.05rem;
			}
		}
	}
`;

export default Signup;

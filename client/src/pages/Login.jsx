import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase_config.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const loginHandler = async (e) => {
		try {
			const { email, password } = formValues;
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (err) {
			console.log(err);
		}
	};
	onAuthStateChanged(firebaseAuth, (current) => {
		if (current) navigate('/');
	});

	return (
		<Container>
			<BackgroundImage />
			<div className="content">
				<Header />
				<div className="flex column a-center j-center">
					<div className="form-container a-center j-center flex column">
						<div className="form flex column a-center j-center">
							<div className="title">
								<h3>Login</h3>
							</div>
							<div className="container flex column">
								<input
									type="email"
									placeholder="Email address"
									name="email"
									value={formValues.email}
									onChange={(e) =>
										setFormValues({ ...formValues, email: e.target.value })
									}
								/>

								<input
									type="password"
									placeholder="Password"
									name="password"
									value={formValues.password}
									onChange={(e) =>
										setFormValues({ ...formValues, password: e.target.value })
									}
								/>

								<button onClick={loginHandler}>Log In</button>
							</div>
						</div>
					</div>
					<div className="form"></div>
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
		.form-container {
			gap: 2rem;
			height: 85vh;
			.form {
				padding: 2rem;
				background-color: #000000b0;
				gap: 2rem;
				width: 25vw;
				color: white;
				.container {
					gap: 2rem;
					input {
						padding: 0.5rem 1rem;
						width: 15rem;
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
		}
	}
`;

export default Login;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Netflix />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

/** @format */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//firebase imports
import { onAuthStateChanged } from 'firebase/auth';
import firebase from './components/helpers/fireBaseConfig';

//components imports
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Search from './components/search/Search';
import LoginPage from './components/login/LoginPage';
import Register from './components/login/register/Register';
import UserPage from './components/UserPage/UserPage';

function App() {
	//user login state
	const [userIsLogIn, setUserIsLogIn] = useState(false);

	const auth = firebase.auth;
	//function for checking if user logged in
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserIsLogIn(true);
		} else {
			setUserIsLogIn(false);
		}
	});

	return (
		<div className="App">
			{/* staging routes */}
			<BrowserRouter>
				<Navbar userIsLogIn={userIsLogIn} />
				{/* routers holds path in app */}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/search" element={<Search />} />
					<Route
						path="/userpage"
						element={<UserPage userIsLogIn={userIsLogIn} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
//app is rendered in index.js
export default App;

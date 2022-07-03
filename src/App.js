/** @format */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Search from './components/search/Search';
import LoginPage from './components/login/LoginPage';
import Register from './components/login/register/Register';
import UserPage from './components/UserPage/UserPage';

import { onAuthStateChanged } from 'firebase/auth';
import firebase from './components/helpers/fireBaseConfig';

//zadanie
// W App.js
// 1. Stan loggedIn (useState)
// 2. onAuthStateChanged, w callbacku:
// a) jeżeli user istnieje to ustaw loggedIn na true
// b) jeżeli user nie istnieje to ustaw loggedIn na false
// 3. Stan loggedIn przekaż propsami do Navbar.js, UserPage.js

function App() {
	const [userIsLogIn, setUserIsLogIn] = useState();

	const auth = firebase.auth;

	//function for checking user
	onAuthStateChanged(auth, (user) => {
		if (user) {
			//log in
			const uid = user.uid;
			const uemail = user.email;
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

/** @format */

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Article from './components/article/Article';
import Form from './components/form/Form';
import LoginPage from './components/login/LoginPage';
import LoginFrom from './components/login/loginForm/LoginForm';
import Register from './components/login/register/Register';

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className='App'>
			<Navbar />
			<HomePage />
			<Article />
			<Form />
			<LoginPage />
			<Register />
		</div>
	);
}
//app is rendered in index.js
export default App;

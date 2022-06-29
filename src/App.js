/** @format */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
			{/* staging routes */}
			<BrowserRouter>
				<Navbar />
				{/* routers holds path in app */}
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='/login' element={<LoginPage />}/>
					<Route path='/register' element={<Register />}/>
				</Routes>
			</BrowserRouter>

			
			{/* <Article />
			<Form />
			
			 */}
		</div>
	);
}
//app is rendered in index.js
export default App;

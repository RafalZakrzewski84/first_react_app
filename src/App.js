/** @format */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Search from './components/search/Search';
import LoginPage from './components/login/LoginPage';
import Register from './components/login/register/Register';

function App() {
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
					<Route path='/search' element={<Search />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
//app is rendered in index.js
export default App;

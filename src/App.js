/** @format */

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className='App'>
			<Navbar />
			<HomePage />
		</div>
	);
}
//app is rendered in index.js
export default App;








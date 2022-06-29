/** @format */

import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Counter from './components/counter/Counter';

// class App extends Component {
// 	render() {
// 		return (
// 			<div className='App'>
// 				<h1>Hello World</h1>
// 			</div>
// 		);
// 	}
// }

function App() {
	const starterCounter = 5;

	return (
		<div className='App'>
			{/* //below are components */}
			<Navbar />
			<Counter starterCounter={starterCounter} />
		</div>
	);
}
//app is rendered in index.js
export default App;

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
	return (
		<div className="App">
			{/* //below are components */}
			<Navbar />
			<Counter />
		</div>
	);
}
//app is rendered in index.js
export default App;

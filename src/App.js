/** @format */

import React, { Component, useState } from 'react';
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
	const [counter, setCounter] = useState();

	return (
		<div className='App'>
			{/* //below are components */}
			<Navbar />
			{/* passing of setCounter to lower element */}
			<Counter starterCounter={starterCounter} setCounter={setCounter}/>
			<span>Counter from lower element - state lifting: {counter}</span>
		</div>
	);
}
//app is rendered in index.js
export default App;

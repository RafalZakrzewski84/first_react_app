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
	const [counter, setCounter] = useState(0);

	return (
		<div className='App'>
			{/* passing counter and setCounter to lower element navbar */}
			<Navbar counter={counter} setCounter={setCounter} />
			<Counter />
		</div>
	);
}
//app is rendered in index.js
export default App;

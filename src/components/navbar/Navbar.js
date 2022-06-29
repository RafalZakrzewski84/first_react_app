/** @format */

import React from 'react';
//zadanie
// W Navbar.js dodaj Button który będzie aktualizował stan counter w App.js i wyświetlaj ten counter w Navbar.js w spanie
// Przekaż stan counter z App.js do Counter.js i tam go wyświetl

const Navbar = (props) => {
	console.log(props);

	//setting counter variable from app.js using its setting function from passed props
	const counterAppAdding = () => {
		props.setCounter(props.counter + 1);
	};
	return (
		<nav>
			<h1>SDA News</h1>
			<button>Home</button>
			<button>Search</button>
			<button>Login</button>
			<button onClick={counterAppAdding}>Add 1 to app counter</button>
			<div>
				{/* printing value of counter from app.ja */}
				<p>Counter from app.js: {props.counter}</p>
				
			</div>
		</nav>
	);
};

export default Navbar;

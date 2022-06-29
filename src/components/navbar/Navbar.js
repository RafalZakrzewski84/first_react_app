/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<h1>SDA News</h1>
			{/* Link is wrapping link to app page "to" is the same like path in app.js */}
			<Link to='/'>
				<button>Home</button>
			</Link>
			<Link to='/search'>
				<button>Search</button>
			</Link>
			<Link to='/login'>
				<button>Login</button>
			</Link>
		</nav>
	);
};

export default Navbar;

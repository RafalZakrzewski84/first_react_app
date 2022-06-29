/** @format */

// 4. LoginForm.js
// Element form
// w formie ma być input type email, input type password, button type submit z textem Log in

import React from 'react';

function LoginFrom() {
	return (
		<form>
			<label>
				Email:
				<input type='email' name='email' />
			</label>
			<label>
				Password:
				<input type='password' name='password' />
			</label>
			<button type='submit'>Log In</button>
		</form>
	);
}

export default LoginFrom;

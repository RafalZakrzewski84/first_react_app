/** @format */

// 5. Register.js
// Element form
// w formie ma być: h2 z tekstem Register new account, input type email, input type password x2, button submit z tekstem Register

import React from 'react';

function Register() {
	return (
		<form>
			<h2>Register New Account</h2>
			<label>
				Email:
				<input type='email' name='email' />
			</label>
			<label>
				Password:
				<input type='password' name='password' />
			</label>
			<label>
				Repeat Password:
				<input type='password' name='repeatedPassword' />
			</label>
			<button type='submit'>Register</button>
		</form>
	);
}

export default Register;

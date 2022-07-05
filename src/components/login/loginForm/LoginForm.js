/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../helpers/fireBaseConfig';

function LoginFrom() {
	const auth = firebase.auth;

	//functions for handle form
	const { register, handleSubmit } = useForm();

	//getting data from form
	const submitHandler = (data) => {
		//crating variables for log in
		const email = data.email;
		const password = data.password;

		//function for logIn
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user.email, 'log in');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<Box align="center" sx={{ bgcolor: '#fff', my: '2rem' }}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<TextField
					type="email"
					id="outlined-basic"
					placeholder="Email"
					variant="outlined"
					sx={{ display: 'block', mb: 1 }}
					{...register('email', { required: true })}
				/>
				<TextField
					type="password"
					id="outlined-basic"
					placeholder="Password"
					variant="outlined"
					sx={{ display: 'block', mb: 1 }}
					{...register('password', { required: true })}
				/>
				<Button variant="contained" type="submit">
					Log in
				</Button>
			</form>
		</Box>
	);
}

export default LoginFrom;

//original code before styling
// <form onSubmit={handleSubmit(submitHandler)}>
// 	<label>
// 		Email:
// 		<input type='email' {...register('email', {required: true})} />
// 		<p>{errors.email && "Email is required"}</p>
// 	</label>
// 	<label>
// 		Password:
// 		<input type='password' {...register('password', {required: true})} />
// 		<p>{errors.password && "Password is required"}</p>
// 	</label>
// 	<button type='submit'>Log In</button>
// </form>

/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import firebase from '../../helpers/fireBaseConfig';

const auth = firebase.auth;

function LoginFrom() {
	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//getting data from form
	const submitHandler = (data) => {
		console.log(data);

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
		<Container align="center" maxWidth="sm">
			<Box align="center" sx={{ bgcolor: '#fff', my: 2 }}>
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
		</Container>
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

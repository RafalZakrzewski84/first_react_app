/** @format */

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import firebase from '../../helpers/fireBaseConfig';

const auth = firebase.auth;

function Register() {
	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//function for taking data from form and adding
	const submitHandler = (data) => {
		// console.log(data);

		//initialize variables for crating user
		const email = data.email;
		const password = data.password;
		const password2 = data.repeatedPassword;

		if (password === password2) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log('user created:', user.email);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		} else {
			console.log("passwords doesn't match");
		}
	};

	return (
		<Container align="center" maxWidth="sm">
			<Box sx={{ bgcolor: '#fff', my: 2 }}>
				<Card sx={{ minWidth: 275, my: 4, p: 4 }}>
					<Typography
						variant="h2"
						component="h2"
						align="center"
						sx={{ fontSize: '1.2rem', my: 2 }}>
						Register New Account
					</Typography>
					<form onSubmit={handleSubmit(submitHandler)}>
						<TextField
							id="outlined-basic"
							placeholder="Email"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="email"
							{...register('email', { required: true })}
						/>
						<TextField
							id="outlined-basic"
							placeholder="Password"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="password"
							{...register('password', { required: true, minLength: 8 })}
						/>
						<TextField
							id="outlined-basic"
							placeholder="Confirm Password"
							variant="outlined"
							sx={{ display: 'block', mb: 1 }}
							type="password"
							{...register('repeatedPassword', {
								required: true,
								minLength: 8,
							})}
						/>
						<Button variant="contained" type="submit">
							Log in
						</Button>
					</form>
				</Card>
			</Box>
		</Container>
	);
}

export default Register;

//original code before styling
// <form onSubmit={handleSubmit(submitHandler)}>
// 	<h2>Register New Account</h2>
// 	<label>
// 		Email:
// 		<input type='email' {...register('email', {required: true})} />
// 		<p>{errors.email && "Email is required"}</p>
// 	</label>
// 	<label>
// 		Password:
// 		<input type='password' {...register('password', {required: true, minLength: 8})} />
// 		<p>{errors.password && "Password is required"}</p>
// 	</label>
// 	<label>
// 		Repeat Password:
// 		<input type='password' {...register('repeatedPassword', {required: true, minLength: 8})} />
// 		<p>{errors.repeatedPassword && "Confirm password"}</p>
// 	</label>
// 	<button type='submit'>Register</button>
// </form>

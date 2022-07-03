/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Register() {
	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//will print form data form text input
	const submitHandler = (data) => {
		console.log(data);
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

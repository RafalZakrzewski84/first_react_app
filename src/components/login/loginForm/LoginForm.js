/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginFrom() {
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
		<Container maxWidth="sm" align="center">
			<Box sx={{ bgcolor: '#fff', my: 2 }}>
				<form onSubmit={handleSubmit(submitHandler)}>
					<TextField
						type="email"
						id="outlined-basic"
						label="Email"
						variant="outlined"
						sx={{ display: 'block', mb: 1 }}
						{...register('email', { required: true })}
					/>
					<TextField
						type="password"
						id="outlined-basic"
						label="Password"
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

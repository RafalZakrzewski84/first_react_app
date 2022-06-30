/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';

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
		<form onSubmit={handleSubmit(submitHandler)}>
			<label>
				Email:
				<input type='email' {...register('email', {required: true})} />
			</label>
			<label>
				Password:
				<input type='password' {...register('password', {required: true})} />
			</label>
			<button type='submit'>Log In</button>
		</form>
	);
}

export default LoginFrom;

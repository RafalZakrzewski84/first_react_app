/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';

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
		<form onSubmit={handleSubmit(submitHandler)}>
			<h2>Register New Account</h2>
			<label>
				Email:
				<input type='email' {...register('email', {required: true})} />
			</label>
			<label>
				Password:
				<input type='password' {...register('password', {required: true})} />
			</label>
			<label>
				Repeat Password:
				<input type='password' {...register('repeatedPassword', {required: true})} />
			</label>
			<button type='submit'>Register</button>
		</form>
	);
}

export default Register;

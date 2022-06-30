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
				<p>{errors.email && "Email is required"}</p>
			</label>
			<label>
				Password:
				<input type='password' {...register('password', {required: true, minLength: 8})} />
				<p>{errors.password && "Password is required"}</p>
			</label>
			<label>
				Repeat Password:
				<input type='password' {...register('repeatedPassword', {required: true, minLength: 8})} />
				<p>{errors.repeatedPassword && "Confirm password"}</p>
			</label>
			<button type='submit'>Register</button>
		</form>
	);
}

export default Register;

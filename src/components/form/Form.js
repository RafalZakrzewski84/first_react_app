/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
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
		//
		<form onSubmit={handleSubmit(submitHandler)}>
			<label>
				Search:
				<input
					type='text'
					{...register('keyword', { required: true })}
					placeholder='Keyword'
				/>
			</label>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default Form;

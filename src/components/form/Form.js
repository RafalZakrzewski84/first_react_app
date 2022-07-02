/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';

function Form(props) {
	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//function for passing search result to search page
	const submitHandler = (data) => {
		//defining variable which hold search term from form
		let dKeyword = data.keyword;

		//setting value of searchKeyword from search page
		props.setSearchKeyword(dKeyword);
	};

	return (
		//
		<form onSubmit={handleSubmit(submitHandler)}>
			<label>
				Search:
				<input
					type="text"
					{...register('keyword', { required: true })}
					placeholder="Keyword"
				/>
				<p>{errors.keyword && "Can't be empty"}</p>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;

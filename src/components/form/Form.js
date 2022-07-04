/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

	// 1. Użyj zwykłego tagu form
	// 2. TextField
	// 3. Button

	return (
		<Box sx={{ bgcolor: '#fff', mt: '2rem' }}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<TextField
					id="outlined-basic"
					placeholder="Search term"
					variant="outlined"
					sx={{ display: 'block', mb: '1rem' }}
					{...register('keyword', { required: true })}
				/>
				<Button variant="contained" type="submit">
					Search
				</Button>
			</form>
		</Box>
	);
}

export default Form;

//original code before styling
// <form onSubmit={handleSubmit(submitHandler)}>
// 	<label>
// 		Search:
// 		<input
// 			type="text"
// 			{...register('keyword', { required: true })}
// 			placeholder="Keyword"
// 		/>
// 		<p>{errors.keyword && "Can't be empty"}</p>
// 	</label>
// 	<button type="submit">Submit</button>
// </form>

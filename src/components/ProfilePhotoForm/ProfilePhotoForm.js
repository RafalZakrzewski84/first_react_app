/** @format */

import { useForm } from 'react-hook-form';
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { uploadBytes, ref } from 'firebase/storage';
import firebase from '../helpers/fireBaseConfig';

//storage refs
const storage = firebase.storage;
const auth = firebase.auth;
// const storageRef = ref(storage, `/users/${auth.currentUser.uid}/${file.name}`);

function ProfilePhotoForm() {
	//functions for handle form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitHandler = (data) => {
		//not needed
		// console.log(data.file[0].name);
		// const fname = data.file[0].name;

		console.log(data.profilePicture[0]);
		const file = data.profilePicture[0];
		const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
		uploadBytes(storageRef, file)
			.then((snapshot) => {
				console.log('File uploaded');
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<Card sx={{ minWidth: 275, my: 4, p: 2 }}>
				<Typography
					variant="h2"
					component="h2"
					sx={{ fontSize: '1.2rem', my: 2 }}>
					Add Profile Picture
				</Typography>

				<Button
					variant="contained"
					component="label"
					sx={{
						display: 'block',
						mx: 'auto',
						my: '1rem',
						alignContent: 'center',
					}}>
					<Typography variant="h6" component="h6">
						Add File Here
					</Typography>
					<input
						type="file"
						hidden
						{...register('profilePicture', { required: true })}
					/>
				</Button>

				<Button variant="contained" type="submit">
					Send
				</Button>
			</Card>
		</form>
	);
}

export default ProfilePhotoForm;

//my solution
// <form onSubmit={handleSubmit(submitHandler)}>
// 	<Card sx={{ minWidth: 275, my: 4, p: 2 }}>
// 		<Typography
// 			variant="h2"
// 			component="h2"
// 			sx={{ fontSize: '1.2rem', my: 2 }}>
// 			Select a file
// 		</Typography>

// 		<input
// 			type="file"
// 			{...register('profilePicture', { required: true })}
// 		/>
// 		{/* <Button variant="contained" sx={{ mr: 1 }}>
// 			<Typography variant="h6" component="h6">
// 				Add file here
// 			</Typography>
// 			<input type="file" hidden {...register('file', { required: true })} />
// 		</Button> */}
// 		<Button variant="contained" type="submit">
// 			Send
// 		</Button>
// 	</Card>
// </form>

//Kacper solution
// <form onSubmit={handleSubmit(submitHandler)}>
// 	<Card sx={{ p: '1rem' }}>
// 		<Typography variant="h6" sx={{ fontSize: '1rem' }} align="center">
// 			Upload your profile picture
// 		</Typography>
// 		<Button
// 			variant="contained"
// 			component="label"
// 			sx={{
// 				display: 'block',
// 				mx: 'auto',
// 				my: '1rem',
// 				alignContent: 'center',
// 			}}>
// 			<Typography variant="h6" sx={{ fontSize: '1rem' }} align="center">
// 				Select a file
// 			</Typography>
// 			<input
// 				type="file"
// 				hidden
// 				{...register('profilePhoto', { required: true })}
// 			/>
// 		</Button>
// 		<Button
// 			variant="contained"
// 			sx={{ display: 'block', mx: 'auto' }}
// 			type="submit">
// 			Upload
// 		</Button>
// 	</Card>
// </form>

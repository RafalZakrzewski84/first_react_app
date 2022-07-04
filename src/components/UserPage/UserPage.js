/** @format */

// UserPage.js
// Renderowanie warunkowe, && in React JSX
// Jeżeli props.loggedIn === true, to render:
// a) Typography h2 text: Your profile
// b) Typography p text: Your email: (wymyśl jak wyświetlić email aktualnie zalogowanego użytkownika)
// c) render ProfilePhotoForm
// d) Button onClick => signOut text: Log out

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ProfilePhotoForm from '../ProfilePhotoForm/ProfilePhotoForm';

import { signOut } from 'firebase/auth';
import firebase from '../helpers/fireBaseConfig';
import Container from '@mui/material/Container';

function UserPage(props) {
	let userPage;
	if (props.userIsLogIn) {
		//getting user data
		const auth = firebase.auth;
		const user = auth.currentUser;
		const email = user.email;
		// console.log(user);

		const signOutHandler = () => {
			signOut(auth)
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
		};
		userPage = (
			<>
				<Typography
					variant="h2"
					component="h2"
					align="center"
					sx={{ fontSize: '2rem', my: 2 }}>
					Your email: {email}
				</Typography>
				<ProfilePhotoForm />
				<Button onClick={signOutHandler} variant="outlined">
					Log Out
				</Button>
			</>
		);
	} else {
		userPage = (
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				To See Details Please LogIn
			</Typography>
		);
	}

	return (
		<Container align="center" maxWidth="sm" sx={{}}>
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				Your Profile Page
			</Typography>
			{userPage}
		</Container>
	);
}

export default UserPage;

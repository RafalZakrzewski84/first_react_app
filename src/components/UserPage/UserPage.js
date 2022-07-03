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

import ProfilePhotoForm from '../ProfilePhotoForm/ProfilePhotoForm';

import { onAuthStateChanged } from 'firebase/auth';
import firebase from '../helpers/fireBaseConfig';

function UserPage(props) {
	const [uEmail, setuEmail] = React.useState('');

	const auth = firebase.auth;
	console.log(auth.currentUser);

	// onAuthStateChanged(auth, (user) => {
	// 	console.log(user.email);
	// 	setuEmail(user.email);
	// });

	return (
		<div>
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				Your profile
			</Typography>
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				Your email: {}
			</Typography>
			<ProfilePhotoForm />
		</div>
	);
}

export default UserPage;

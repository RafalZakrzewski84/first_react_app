/** @format */

import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import LoginFrom from './loginForm/LoginForm';
import ProfilePhotoForm from '../ProfilePhotoForm/ProfilePhotoForm';

function LoginPage() {
	return (
		<Container align="center" maxWidth="sm">
			<Card sx={{ minWidth: 275, my: 4 }}>
				<LoginFrom />
			</Card>
			<ProfilePhotoForm />
			<Card sx={{ minWidth: 275, my: 2 }}>
				<Typography
					variant="h2"
					component="h2"
					sx={{ fontSize: '1.2rem', my: 2 }}>
					Don't have an account yet? Register now!
				</Typography>
				<Link to="/register" style={{ textDecoration: 'none' }}>
					<Button variant="contained" sx={{ mb: 2 }}>
						Register
					</Button>
				</Link>
			</Card>
		</Container>
	);
}

export default LoginPage;

//original code before styling
// <>
// 	<LoginFrom />
// 	<h2>Don't have an account yet? Register now!</h2>
// 	<Link to='/register'>
// 		<button>Register</button>
// 	</Link>
// </>

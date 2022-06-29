/** @format */
import LoginFrom from './loginForm/LoginForm';
// 6. LoginPage.js
// Wyrenderuj LoginForm.js
// h2 Don't have an account yet? Register now!
// button type button Register

function LoginPage() {
	return (
		<>
			<LoginFrom />
			<h2>Don't have an account yet? Register now!</h2>
			<button>Register</button>
		</>
	);
}

export default LoginPage;

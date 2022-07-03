/** @format */

// import React from 'react';
import { Link } from 'react-router-dom';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FitbitIcon from '@mui/icons-material/Fitbit';

const Navbar = (props) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	console.log('navbar props:', props);

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Roboto',
							fontWeight: 300,
							letterSpacing: '.1rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						SDA News
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							<MenuItem>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<Typography textAling="center" onClick={handleCloseNavMenu}>
										Home
									</Typography>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link to="/search" style={{ textDecoration: 'none' }}>
									<Typography textAling="center" onClick={handleCloseNavMenu}>
										Search
									</Typography>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link to="/login" style={{ textDecoration: 'none' }}>
									<Typography textAling="center" onClick={handleCloseNavMenu}>
										LogIn
									</Typography>
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<FitbitIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Roboto',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						SDA News
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								Home
							</Button>
						</Link>
						<Link to="/search" style={{ textDecoration: 'none' }}>
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								Search
							</Button>
						</Link>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Link to="/login" style={{ textDecoration: 'none' }}>
							<IconButton sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							</IconButton>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;

//code before styling
// <nav>
// 	<h1>SDA News</h1>
// 	{/* Link is wrapping link to app page, "to" is the same like path in app.js */}
// 	<Link to='/'>
// 		<button>Home</button>
// 	</Link>
// 	<Link to='/search'>
// 		<button>Search</button>
// 	</Link>
// 	<Link to='/login'>
// 		<button>Login</button>
// 	</Link>
// </nav>

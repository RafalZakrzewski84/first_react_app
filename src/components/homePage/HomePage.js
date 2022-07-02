/** @format */

// 3. HomePage.js
// h2 Today's hottest news:
// pusty ul

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import axios from 'axios';
import API_KEY from '../helpers/helpers';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Article from '../article/Article';

function HomePage() {
	//hook use state
	const [todaysArticles, setTodaysArticles] = useState([]);
	//hook use effect
	useEffect(() => {
		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth();
		const year = today.getFullYear();

		//feaching data from news API using axios
		axios
			.get(
				`https://newsapi.org/v2/everything?q=world&from=${year}-${
					month < 10 ? `0${month + 1}` : month + 1
				}-${day - 1}&language=en&sortBy=popularity&apiKey=${API_KEY}`
			)
			.then((response) => {
				console.log(response);
				//setting axios response to todaysArticles
				setTodaysArticles(response.data.articles);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	// 1. h2 zamień na Typography (sprawdź jak wyświetlić Tg jako h2), text: Today's hottest news:
	//2. ul => List
	return (
		<Container maxWidth="sm" sx={{}}>
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				Today's hottest news
			</Typography>
			<List>
				{todaysArticles.map((art, idx) => {
					return <Article key={idx} art={art} />;
				})}
			</List>
		</Container>
	);
}

export default HomePage;

//original code before styling
// <>
// 	<h2>Today's hottest news:</h2>
// 	{/* rendering articles on page, we are passing data to article by prop art */}
// 	<ul>
// 		{todaysArticles.map((art, idx) => {
// 			return <Article key={idx} art={art} />;
// 		})}
// 	</ul>
// </>

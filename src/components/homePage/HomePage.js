/** @format */

import React, { useState, useEffect } from 'react';
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
		//date fot from parameter in URL
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
				//printing axios response
				// console.log(response);

				//setting axios response to todaysArticles
				setTodaysArticles(response.data.articles);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<Container align="center" maxWidth="sm">
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: '2rem' }}>
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

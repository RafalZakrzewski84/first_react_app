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
		const API_URL = 'http://api.mediastack.com/v1/news?access_key=';

		//feaching data from news API using axios
		axios
			.get(`${API_URL}${API_KEY}&languages=en`)
			.then((response) => {
				//printing axios response
				console.log(response);

				//setting axios response to todaysArticles
				setTodaysArticles(response.data.data);
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

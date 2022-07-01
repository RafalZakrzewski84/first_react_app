/** @format */

// 3. HomePage.js
// h2 Today's hottest news:
// pusty ul

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../helpers/helpers';
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

	return (
		<>
			<h2>Today's hottest news:</h2>
			{/* rendering articles on page, we are passing data to article by prop art */}
			<ul>{todaysArticles.map((art, idx) => {
				return <Article key={idx} art={art}/>
			})}
			</ul>
		</>
	);
}

export default HomePage;

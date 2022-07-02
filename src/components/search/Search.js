/** @format */

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import Form from '../form/Form';
import API_KEY from '../helpers/helpers';
import Article from '../article/Article';

function Search() {
	//for taking keyword from form nad setting variable used in search api
	const [searchKeyword, setSearchKeyword] = useState('');

	//for setting articles
	const [searchArticles, setSearchArticles] = useState([]);

	useEffect(() => {
		//base url for searching in API
		const API_URL = 'https://newsapi.org/v2/everything?q=';

		//constructing date for from in url
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		if (day < 7) {
			day = day + 31 - 7;
			month = month < 10 ? `0${month}` : month;
		} else {
			day = day < 10 ? `0${day}` : day;
			month = month < 10 ? `0${month + 1}` : month + 1;
		}

		let from = `${year}-${month}-${day}`;
		console.log(from);

		//fetching function if search term not empty
		if (searchKeyword !== '') {
			axios
				.get(
					`${API_URL}${searchKeyword}&from=${from}&language=en&sortBy=popularity&apiKey=${API_KEY}`
				)
				.then((res) => {
					//printing fetch result
					console.log(res);
					//setting searchArticles variable
					setSearchArticles(res.data.articles);
				})
				.catch((e) => console.log(e));
		}
		//searchKeyword below will trigger useEffect
	}, [searchKeyword]);

	return (
		<Container align="center" maxWidth="sm" sx={{}}>
			<Form searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
			<Typography
				variant="h2"
				component="h2"
				align="center"
				sx={{ fontSize: '2rem', my: 2 }}>
				Most popular news from last week
			</Typography>
			<List>
				{searchArticles.map((art, idx) => {
					return <Article key={idx} art={art} />;
				})}
			</List>
		</Container>
	);
}

export default Search;

//code before styling
// <div className="Search">
// 	{/* passing search setting params to form */}
// 	<Form searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
// 	<ul>
// 		{searchArticles.map((art, idx) => {
// 			return <Article key={idx} art={art} />;
// 		})}
// 	</ul>
// </div>

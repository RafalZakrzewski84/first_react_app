/** @format */

import React, { useState, useEffect } from 'react';
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
		<div className="Search">
			{/* passing search setting params to form */}
			<Form searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
			<ul>
				{searchArticles.map((art, idx) => {
					return <Article key={idx} art={art} />;
				})}
			</ul>
		</div>
	);
}

export default Search;

// 1. Wyświetl formularz z Form.js
// 2. Wyświetl ul, w którym będą renderowane komponenty Article.js w pętli
// 3. Wyciągnij wartość z formularza z Form.js do tego komponentu i zapisz ją tutaj (to jest keyword)
// 4. Na podstawie keyword'u wykonaj fetcha axiosem `newsapi.org/v2/everything, q=keyword, from=7 dni do tyłu,language=angielski, sortowanie po popularności, apiKey`, całość opakuj w useEffect
// 5. Dane z fetcha też zapisz do zmiennej

/** @format */

// 1. Article.js
// Element li
// w elemencie li:
// a w którym zawierać ma się tag img, span z przykładowym tekstem

import React from 'react';

function Article({ art }) {
	return (
		<li>
			<a href={art.url}>
				<img src='art.urlToImage' alt='art.title' />
				<span>{art.title}</span>
			</a>
		</li>
	);
}

export default Article;

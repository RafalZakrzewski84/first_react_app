/** @format */

// 1. Article.js
// Element li
// w elemencie li:
// a w którym zawierać ma się tag img, span z przykładowym tekstem

import React from 'react';

function Article() {
	return (
		<li>
			<a href='#'>
				<img src='/' alt='alt' />
				<span>Link with img and description</span>
			</a>
		</li>
	);
}

export default Article;

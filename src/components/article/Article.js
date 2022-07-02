/** @format */

import React from 'react';

//taking props art from homepage
function Article({ art }) {
	return (
		<li>
			{/* distributing axios data by props in article */}
			<a href={art.url}>
				<img style={{ width: '200px' }} src={art.urlToImage} alt={art.title} />
				<div>{art.title}</div>
				<div>{art.publishedAt}</div>
			</a>
		</li>
	);
}

export default Article;

/** @format */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import newsArt from '../../assets/article.jpg';

//taking props art from homepage - art is article from
function Article({ art }) {
	let artDate = art.published_at.slice(0, 10);

	const [artImage, setArtImage] = React.useState(null);

	React.useEffect(() => {
		if (art.image === null) {
			//process.env.PUBLIC_URL+'article.jpg'
			setArtImage(newsArt);
		} else {
			setArtImage(art.image);
		}
	}, [art]);

	return (
		<Link href={art.url} target="blank" underline="none">
			<Card elevation={6} sx={{ maxWidth: 345, mb: '2rem' }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={artImage}
						alt={art.title}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							component="div"
							sx={{ lineHeight: '1.5rem', mb: '1.5rem' }}>
							{art.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{art.description}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ lineHeight: '1rem', my: '1.5rem' }}>
							Published At: {artDate}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}

export default Article;

//code before styling
// <li>
// 	{/* distributing axios data by props in article */}
// 	<a href={art.url}>
// 		<img style={{ width: '200px' }} src={art.urlToImage} alt={art.title} />
// 		<div>{art.title}</div>
// 		<div>{art.publishedAt}</div>
// 	</a>
// </li>

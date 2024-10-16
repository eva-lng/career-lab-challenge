import { useState } from 'react';
import { Link } from 'react-router-dom';

import { searchArtworks } from '../api';

import { Footer } from './Footer';
import { SearchForm } from './SearchForm';

export function Home() {
	const [searchResults, setSearchResults] = useState([]);
	const [error, setError] = useState(null);

	function onSearchSubmit(query) {
		searchArtworks(query)
			.then((json) => {
				console.log(json);
				if (json) {
					setSearchResults(json.data);
					setError(null);
				}
			})
			.catch((error) => {
				setError('Failed to fetch artworks');
				console.log(error);
			});
	}

	return (
		<div className="Home">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{error && <p>{error}</p>}
			{searchResults.length > 0 ? (
				<ul>
					{searchResults.map((art) => (
						<li key={art.image_id}>
							<Link
								state={{ artworks: searchResults }}
								to={`/artwork/${art.image_id}`}
							>
								{art.title}
								{art.artist_title ? `, by ${art.artist_title}` : ''}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p>No results found</p>
			)}
			<Footer />
		</div>
	);
}

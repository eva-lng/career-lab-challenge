import { useParams, useLocation } from 'react-router-dom';

export function ImageDetailsPage() {
	const { id } = useParams();
	const location = useLocation();
	const artworks = location.state?.artworks || [];

	// Log for debugging
	console.log('ID from params:', id);
	console.log(
		'Artworks IDs:',
		artworks.map((art) => art.image_id),
	);

	const artwork = artworks.find((art) => art.image_id === id);
	console.log('artwork: ', artwork);

	if (!artwork) {
		return <p>Artwork not found</p>;
	}

	return (
		<div className="ImageDetailsPage">
			<h2>{artwork.title}</h2>
			{artwork.artist_title && <p>by {artwork.artist_title}</p>}
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}

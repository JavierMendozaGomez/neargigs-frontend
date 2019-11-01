import React from 'react';
import './concertPreview.styles.scss';

const ConcertPreview = ({title, image}) => (
	<div className='concert-preview'>
		<p>{title}</p>
		<img className='previewImage' src={image} alt="Italian Trulli" />
	</div>
);

export default ConcertPreview;

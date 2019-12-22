import React from 'react';
import './concertPreview.styles.scss';
import {withRouter} from 'react-router-dom';

const ConcertPreview = ({ history, title, imageURL, id }) => (
	<div className='concert-preview'>
		<p>{title}</p>
		<img className='previewImage' src={imageURL} alt="Wrong Image"
			onClick={() => (history.push(`/concert/${id}`))} />
	</div>
);

export default withRouter(ConcertPreview);

import React from 'react';
import './concertPreview.styles.scss';
import {withRouter} from 'react-router-dom';
const ConcertPreview = ({history, title, image, id}) => (
	<div className='concert-preview'>
		<p>{title}</p>
		<img className='previewImage' src={image} alt="Italian Trulli"
			onClick={() => (history.push(`/concert/${id}`))}/>
	</div>
);

export default withRouter(ConcertPreview);

import React from 'react';
import './concertPreview.styles.scss';

const ConcertPreview = ({title, image}) => (
    <div>
        <p>{title}</p>
        <img class='previewImage' src={image} alt="Italian Trulli" />
    </div>
);
export default ConcertPreview;
import React, {useEffect, useReducer} from 'react';
import ConcertPreview from '../concertPreview/concertPreview.component';
import './concertsOverview.styles.scss';
import {getAllConcerts} from  '../../redux/concertsOverview/concertsOverview.actions';
import ConcertsOverviewReducer from '../../redux/concertsOverview/concertsOveview.reducer';


const ConcertsOverview = () => {
	const [{collection}, dispatch] = useReducer(ConcertsOverviewReducer, {
		collection: []
	});

	useEffect(() => {
		getAllConcerts()(dispatch);
	}, []);

	return (
		<div className='concerts-overview'>
			<h1>Collection of concerts</h1>
			<div className='concerts'>
				{
					collection.map(({ id, ...otherConcertProps }) => (
						<ConcertPreview key={id} {...otherConcertProps} id={id} />
					))
				}
			</div>
		</div>)
};

export default ConcertsOverview;

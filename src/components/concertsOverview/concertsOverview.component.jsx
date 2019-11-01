import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/concertsOverview/concertsOverview.selectors';
import {connect} from 'react-redux';
import ConcertPreview from '../concertPreview/concertPreview.component';
import './concertsOverview.styles.scss';

const ConcertsOverview = ({collections}) => (
	<div className='concerts-overview'>
		<h1>Collection of concerts</h1>
		<div className='concerts'>
			{
				collections.map(({id, ...otherConcertProps}) => (
					<ConcertPreview key={id} {...otherConcertProps} id={id} />
				))
			}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollection,
});

export default connect(mapStateToProps)(ConcertsOverview);

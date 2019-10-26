import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/concertsOverview/concertsOverview.selectors';
import {connect} from 'react-redux';
import ConcertPreview from '../concertPreview/concertPreview.component';

const ConcertsOverview = ({collections}) => (
	<div>
        Collection of concerts
		{
			collections.map(({id, ...otherConcertProps}) => (
				<ConcertPreview key={id} {...otherConcertProps} id={id}/>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollection,
});

export default connect(mapStateToProps)(ConcertsOverview);

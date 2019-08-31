import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/concertsOverview/concertsOverview.selectors';
import {connect} from 'react-redux';

const ConcertsOverview = ({collections}) => (
	<div>
        Collection of concerts
		{
			collections.map((concert) => (
				<p key={concert.id}>{concert.title}</p>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollection,
});

export default connect(mapStateToProps)(ConcertsOverview);

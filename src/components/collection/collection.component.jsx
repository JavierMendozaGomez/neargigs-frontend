import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/concertsOverview/concertsOverview.selectors';
import {connect} from 'react-redux';

const Collection = ({collections}) => (
    <div>
        Collection of concerts
        {
            collections.map( collection => (
                <p>{collection.title}</p>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollection,
})

export default connect(mapStateToProps)(Collection);


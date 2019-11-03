import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import {selectConcert} from '../../redux/concertsOverview/concertsOverview.selectors';
import {getConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import {connect} from 'react-redux';

import SpotifyPlayer from 'react-spotify-player';

const ConcertInfo = ({concert, getConcert}) => {

    useEffect(() => {
        getConcert(concert.id);
    }, []);

    const {
        title,
        imageURL,
        dateOfEvent,
        description,
        spotifyURI,
        lat,
        lon
    } = concert;

    return(
        <div className='concert-info'>
            <h1>{title}</h1>
            <img src={imageURL} alt='PRoblem loading it' />
            <div className='description'>{description}</div>
            <SpotifyPlayer
                uri={spotifyURI}
                size='large'
                view='list'
                theme='black'
            />
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    concert: selectConcert,
});

export default connect(mapStateToProps, {getConcert})(ConcertInfo);
import React, {useEffect, useReducer} from 'react';
import {getConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import SpotifyPlayer from 'react-spotify-player';
import {withRouter} from 'react-router-dom';
import ConcertsOverviewReducer from '../../redux/concertsOverview/concertsOveview.reducer';

const ConcertInfo = ({match}) => {
    const [{concert}, dispatch] = useReducer(ConcertsOverviewReducer, {
        concert: {
            id: '',
            title: '',
            image: '',
            description : '',
            spotifyURI : '',
        }
    });

    useEffect(() => {
        getConcert(match.params.id)(dispatch);
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

export default withRouter(ConcertInfo);
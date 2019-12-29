import React, {useEffect, useReducer} from 'react';
import {getConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import SpotifyPlayer from 'react-spotify-player';
import {withRouter} from 'react-router-dom';
import ConcertsOverviewReducer from '../../redux/concertsOverview/concertsOveview.reducer';
import Map from '../../components/map/map.component'

const ConcertInfo = ({match}) => {
    const points = [
        {
            coordinates: [-0.13389631465156526, 51.510387047712356],
            properties: {
                id: 1,
                name: 'Checkpoint A'
            }
        },
        {
            coordinates: [-0.11281231063600217, 51.51807866942707],
            properties: {
                id: 2,
                name: 'Checkpoint B'
            }
        },
        {
            coordinates: [0.04410606135789408, 51.60606293106869],
            properties: {
                id: 3,
                name: 'Checkpoint C'
            }
        },
        {
            coordinates: [0.06813865412814835, 51.6009452260123],
            properties: {
                id: 4,
                name: 'Checkpoint D'
            }
        },
        {
            coordinates: [0.05028587092436965, 51.596253489653066],
            properties: {
                id: 5,
                name: 'Checkpoint E'
            }
        },
        {
            coordinates: [0.026939923659398346, 51.59412072198555],
            properties: {
                id: 6,
                name: 'Checkpoint F'
            }
        },
        {
            coordinates: [0.04822593439902789, 51.58729519243778],
            properties: {
                id: 7,
                name: 'Checkpoint G'
            }
        },
        {
            coordinates: [0.0598989080363026, 51.58516200412868],
            properties: {
                id: 8,
                name: 'Checkpoint H'
            }
        },
        {
            coordinates: [-0.1484370070708394, 51.51355434335747],
            properties: {
                id: 9,
                name: 'Checkpoint I'
            }
        },
        {
            coordinates: [-0.14116666086630403, 51.516268992925035],
            properties: {
                id: 10,
                name: 'Checkpoint J'
            }
        },
        {
            coordinates: [-0.14698293783399663, 51.50857706561709],
            properties: {
                id: 11,
                name: 'Checkpoint K'
            }
        },
        {
            coordinates: [-0.1389855570008649, 51.512649424212185],
            properties: {
                id: 12,
                name: 'Checkpoint L'
            }
        },
        {
            coordinates: [-0.1484370070708394, 51.51581656256633],
            properties: {
                id: 13,
                name: 'Checkpoint M'
            }
        },
        {
            coordinates: [-0.1542532840487354, 51.51400679618595],
            properties: {
                id: 14,
                name: 'Checkpoint N'
            }
        },
        {
            coordinates: [-0.17024804570488072, 51.516268992925035],
            properties: {
                id: 15,
                name: 'Checkpoint O'
            }
        },
        {
            coordinates: [-0.16006956101645642, 51.50857706561709],
            properties: {
                id: 16,
                name: 'Checkpoint P'
            }
        }
    ];

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
            <Map points={points}/>
        </div>
        
    )
};

export default withRouter(ConcertInfo);
import React, {useEffect} from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import './map.styles.scss';     
const Map = () => {
    const key = process.env.REACT_APP_BASE_API_KEY_TOMTOM;
    useEffect(() => {
        tt.map({
          key,
          container: 'map',
          style: 'tomtom://vector/1/basic-main',
          center: [-0.128666, 51.505814],
          zoom: 10,
        });
    }, []);
    return (
        <div id='map' className='map'></div>
    )
}

export default Map;
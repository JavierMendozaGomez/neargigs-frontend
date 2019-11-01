import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const ConcertInfo = () => {
    const title = 'System of a down';
    const image = 'https://townsquare.media/site/366/files/2019/02/System-of-a-Down-New1.jpg?w=980&q=75';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    const spotifyURI= 'spotify:album:6jWde94ln40epKIQCd8XUh';
    const location = '';

    return(
        <div className='concert-info'>
            <h1>{title}</h1>
            <img src={image} alt='PRoblem loading it' />
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
export default ConcertInfo;
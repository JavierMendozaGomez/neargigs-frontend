import ConcertsOverviewTypes from './concertsOverview.types';
const INITIAL_STATE = {
    collection: [
        {
            id: '1',
            title:'The Strokes',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/The_Strokes_by_Roger_Woolman.jpg'
        },
        {
            id: '2',
            title: 'System of a down',
            image: 'https://townsquare.media/site/366/files/2019/02/System-of-a-Down-New1.jpg?w=980&q=75'
        },
        {
            id: '3',
            title: 'The strokes',
            image: 'https://www.dw.com/image/46699690_304.jpg'
        }
    ],
    concert: {
        id: '2',
        title: 'System of a down',
        image: 'https://townsquare.media/site/366/files/2019/02/System-of-a-Down-New1.jpg?w=980&q=75',
        description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        spotifyURI :'spotify:album:6jWde94ln40epKIQCd8XUh',
    }
};

const ConcertsOverview = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ConcertsOverviewTypes.ADD_NEW_CONCERT_SUCCESS: 
            return {
                ...state,
                collections: state.collection.push(action.payload)
            }
        case ConcertsOverviewTypes.GET_CONCERT_SUCCESS:
            return {
                ...state,
                concert: action.payload
            }
        case ConcertsOverviewTypes.GET_ALL_CONCERTS_SUCCESS: 
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state;
    }
};

export default ConcertsOverview;
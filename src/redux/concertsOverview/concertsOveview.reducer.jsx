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
        id: '',
        title: '',
        imageURL: '',
        description : '',
        spotifyURI : '',
        dateOfEvent: null,
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
        case ConcertsOverviewTypes.UPDATE_CONCERT_SUCCESS: 
            return {
                ...state,
                concert: action.payload
            }
        case ConcertsOverviewTypes.UPDATE_FIELDS_FORM:
            return {
                ...state,
                concert: action.payload
            }
        default:
            return state;
    }
};

export {
    INITIAL_STATE,
};

export default ConcertsOverview;
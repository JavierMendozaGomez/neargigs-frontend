import ConcertsOverviewTypes from './concertsOverview.types';
import axios from 'axios';

const createConcert = concert => async (dispatch)  => {
    try {
        axios.post('http://localhost:4000/concerts', {
            ...concert
        }, {
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json'
          },
        });
        return dispatch({
            type: ConcertsOverviewTypes.CREATE_CONCERT_SUCCESS,
            payload: concert
        });
    } catch (error) {
        return dispatch({
            type: ConcertsOverviewTypes.CREATE_CONCERT_FAILED
        });
    }
};

export {
    createConcert
};
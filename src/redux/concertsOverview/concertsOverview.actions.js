import ConcertsOverviewTypes from './concertsOverview.types';
import axios from 'axios';

const createConcert = concert => async (dispatch)  => {
    try {
        const response = axios.post('localhost:4000/concerts', {
            ...concert
        }, {
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
          },
          'Content-Type': 'application/json'
        });
        console.log('Response');
        console.log(response);
        return dispatch({
            type: ConcertsOverviewTypes.CREATE_CONCERT_SUCCESS,
            payload: concert
        });
    } catch (error) {
        console.log('ERROR');
        console.log(error);
        return dispatch({
            type: ConcertsOverviewTypes.CREATE_CONCERT_FAILED
        });
    }
};

export {
    createConcert
};
import ConcertsOverviewTypes from './concertsOverview.types';

const createConcert = concert => {
    return ({
    type: ConcertsOverviewTypes.ADD_NEW_CONCERT,
    payload: concert
    });
};

export {
    createConcert
};
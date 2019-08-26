import ConcertsOverviewTypes from './concertsOverview.types';

const createConcert = concert => ({
    type: ConcertsOverviewTypes.ADD_NEW_CONCERT,
    payload: concert
});

export {
    createConcert
};
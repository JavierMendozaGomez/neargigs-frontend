import {createSelector} from 'reselect';

const selectConcertsOverview = state => state.concertsOverview;

export const selectCollection = createSelector(
    [selectConcertsOverview],
    concertsOverview => concertsOverview.collection
);

export const selectConcert = createSelector(
    [selectConcertsOverview],
    concertsOverview => concertsOverview.concert
);

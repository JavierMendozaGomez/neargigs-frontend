import {combineReducers} from 'redux';
import concertsOverviewReducer from './concertsOverview/concertsOveview.reducer';

const rootReducer = combineReducers({
    concertsOverview: concertsOverviewReducer
});

export default rootReducer;

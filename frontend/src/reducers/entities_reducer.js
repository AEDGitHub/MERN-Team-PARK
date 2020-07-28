import { combineReducers } from 'redux';

import groupsReducer from './groups_reducer';
import usersReducer from './users_reducer';
import eventsReducer from "./events_reducer";

const entitiesReducer = combineReducers({
    groups: groupsReducer,
    users: usersReducer,
    events: eventsReducer
});

export default entitiesReducer;
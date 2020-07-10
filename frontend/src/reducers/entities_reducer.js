import { combineReducers } from 'redux';

import groupsReducer from './groups_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    groups: groupsReducer,
    users: usersReducer,
});

export default entitiesReducer;
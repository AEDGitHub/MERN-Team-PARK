import { combineReducers } from 'redux';

import groupsReducer from './groups_reducer';
import usersReducer from './users_reducer';
import interestsReducer from './interests_reducer';

const entitiesReducer = combineReducers({
    groups: groupsReducer,
    users: usersReducer,
    interests: interestsReducer
});

export default entitiesReducer;
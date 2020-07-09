import {
    RECEIVE_USER
} from "../actions/user_actions";
import { RECEIVE_GROUP_JOIN } from "../actions/group_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.user.data._id] = action.user.data
            // nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_GROUP_JOIN:
            let { user } = action.payload.data;
            nextState[user._id] = user;
            return nextState;
        default:
            return oldState
    }
}

export default usersReducer;
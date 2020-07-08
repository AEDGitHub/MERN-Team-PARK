import {
    RECEIVE_GROUP
} from "../actions/group_actions";

const groupsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_GROUP:
            // nextState[action.group._id] = action.group
            nextState[action.group.data._id] = action.group.data
            // nextState.new = action.group.data
            return nextState
        default:
            return oldState
    }
}

export default groupsReducer;
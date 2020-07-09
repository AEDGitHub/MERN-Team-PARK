import {
    RECEIVE_GROUP,
    RECEIVE_GROUPS,
    RECEIVE_GROUP_JOIN
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
        case RECEIVE_GROUPS:
            action.groups.data.forEach(group => (
                nextState[group._id] = group
            ));
            return nextState;
        default:
            return oldState
    }
}

export default groupsReducer;
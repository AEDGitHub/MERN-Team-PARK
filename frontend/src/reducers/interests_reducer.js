import {
    RECEIVE_INTEREST,
    RECEIVE_INTERESTS
} from "../actions/interest_actions";

const interestsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_INTEREST:
            nextState[action.interest.data._id] = action.interest.data
            return nextState
        case RECEIVE_INTERESTS:
            return action.interests
        default:
            return oldState
    }
}; 

export default interestsReducer;
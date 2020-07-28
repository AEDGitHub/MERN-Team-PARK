import { RECEIVE_EVENT, RECEIVE_EVENTS } from "../actions/event_actions";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EVENT:
            nextState[action.event._id] = action.event;
        case RECEIVE_EVENTS:
            // Need to figure out what data from backend looks like first before adding
        default:
            return state;
    }
}

export default eventsReducer;
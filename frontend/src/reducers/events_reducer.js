import {
    RECEIVE_USER_EVENT,
    RECEIVE_JOINED_EVENT,
    RECEIVE_UNJOINED_EVENT,
    RECEIVE_EVENTS
} from "../actions/event_actions";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_EVENT:
            nextState.createdEvents[action.event._id] = action.event;
            debugger
            return nextState;
        case RECEIVE_JOINED_EVENT:
            delete nextState.invitedEvents[action.event._id]; // remove event from invited slice of event state
            nextState.confirmedEvents[action.event._id] = action.event; // add to confirmed slice of event state
            return nextState;
        case RECEIVE_UNJOINED_EVENT:
            delete nextState.confirmedEvents[action.event._id]; // remove event from confirmed slice of event state
            nextState.invitedEvents[action.event._id] = action.event; // add to invited slice of event state
            return nextState;
        case RECEIVE_EVENTS:
            // put all created events in their own slice of event state
            action.events.ownedEvents.forEach(event => {
                nextState.createdEvents[event._id] = event;
            });

            // Add confirmed events to their own slice of event state. Skip if they are already in created
            action.events.confirmedEvents.forEach(event => {
                if (event._id in nextState.createdEvents) return;
                nextState.confirmedEvents[event._id] = event;
            })

            // Add invited events to their own slice of event state. Skip if they are already in created or confirmed
            action.events.invitedEvents.forEach(event => {
                if (event._id in nextState.createdEvents || event._id in nextState.confirmedEvents) return;
                nextState.invitedEvents[event._id] = event;
            })

            return nextState;
        default:
            return state;
    }
}

export default eventsReducer;
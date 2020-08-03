import {
    RECEIVE_USER_EVENT,
    RECEIVE_JOINED_EVENT,
    RECEIVE_UNJOINED_EVENT,
    RECEIVE_EVENTS
} from "../actions/event_actions";

const eventsReducer = (state = { createdEvents: {}, confirmedEvents: {}, invitedEvents: {}}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER_EVENT:
            nextState.createdEvents[action.event.data._id] = action.event.data;
            return nextState;
        case RECEIVE_JOINED_EVENT:
            let joinedEvent = action.payload.data.event;
            delete nextState.invitedEvents[joinedEvent._id]; // remove event from invited slice of event state
            nextState.confirmedEvents[joinedEvent._id] = joinedEvent; // add to confirmed slice of event state
            return nextState;
        case RECEIVE_UNJOINED_EVENT:
            let unjoinedEvent = action.payload.data.event;
            delete nextState.confirmedEvents[unjoinedEvent._id]; // remove event from confirmed slice of event state
            nextState.invitedEvents[unjoinedEvent._id] = unjoinedEvent; // add to invited slice of event state
            return nextState;
        case RECEIVE_EVENTS:
            // put all created events in their own slice of event state
            action.events.data.ownedEvents.forEach(event => {
                nextState.createdEvents[event._id] = event;
            });
            // Add confirmed events to their own slice of event state. Skip if they are already in created
            action.events.data.confirmedEvents.forEach(event => {
                if (event._id in nextState.createdEvents) return;
                nextState.confirmedEvents[event._id] = event;
            })
            // Add invited events to their own slice of event state. Skip if they are already in created or confirmed
            action.events.data.invitedEvents.forEach(event => {
                if (event._id in nextState.createdEvents || event._id in nextState.confirmedEvents) return;
                nextState.invitedEvents[event._id] = event;
            })

            return nextState;
        default:
            return state;
    }
}

export default eventsReducer;
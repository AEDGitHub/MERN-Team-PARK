import * as APIUtil from "../util/event_api_util";

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveEvent = event => {
    return {
        type: RECEIVE_EVENT,
        event
    };
};

const receiveEvents = events => {
    return {
        type: RECEIVE_EVENTS,
        events
    };
};

export const createEvent = eventData => dispatch => {
    return APIUtil.createEvent(eventData)
        .then(event => dispatch(receiveEvent(event)));
};

export const joinEvent = eventID => dispatch => {
    return APIUtil.joinEvent(eventID)
        .then(event => dispatch(receiveEvent(event)));
};

export const editEvent = eventData => dispatch => {
    return APIUtil.editEvent(eventData)
        .then(event => dispatch(receiveEvent(event)));
};

export const fetchUserEvents = userID => dispatch => {
    return APIUtil.fetchUserEvents(userID)
        .then(events => dispatch(receiveEvents(events)));
}
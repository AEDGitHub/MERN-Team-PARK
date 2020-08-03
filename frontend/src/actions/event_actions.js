import * as APIUtil from "../util/event_api_util";

export const RECEIVE_USER_EVENT = "RECEIVE_USER_EVENT";
export const RECEIVE_JOINED_EVENT = "RECEIVE_JOINED_EVENT";
export const RECEIVE_UNJOINED_EVENT = "RECEIVE_UNJOINED_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveUserEvent = event => {
    return {
        type: RECEIVE_USER_EVENT,
        event
    };
};

const receiveJoinedEvent = payload => {
    return {
        type: RECEIVE_JOINED_EVENT,
        payload
    };
};

const receiveUnjoinedEvent = payload => {
    return {
        type: RECEIVE_UNJOINED_EVENT,
        payload
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
        .then(event => dispatch(receiveUserEvent(event)));
};

export const editEvent = eventData => dispatch => {
    return APIUtil.editEvent(eventData)
        .then(event => dispatch(receiveUserEvent(event)));
};

export const joinEvent = eventID => dispatch => {
    return APIUtil.joinEvent(eventID)
        .then(event => dispatch(receiveJoinedEvent(event)));
};

export const unjoinEvent = eventID => dispatch => {
    return APIUtil.unjoinEvent(eventID)
        .then(event => dispatch(receiveUnjoinedEvent(event)));
};

export const fetchUserEvents = userID => dispatch => {
    return APIUtil.fetchUserEvents(userID)
        .then(events => dispatch(receiveEvents(events)));
}
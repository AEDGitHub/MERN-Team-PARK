import axios from 'axios';

export const createEvent = eventData => {
    return axios.post("/api/events", eventData);
};

export const joinEvent = eventID => {
    return axios.post(`/api/events/${eventID}/join`);
};

export const editEvent = eventData => {
    return axios.patch(`/api/events/${eventData.id}`, eventData);
};

export const fetchUserEvents = userID => {
    return axios.get(`/api/users/${userID}/events`);
};
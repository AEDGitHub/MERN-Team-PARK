import axios from 'axios';

export const createEvent = eventData => {
    return axios.post("/api/events", eventData);
};

export const editEvent = eventData => {
    return axios.patch(`/api/events/${eventData.id}`, eventData);
};

export const joinEvent = eventID => {
    return axios.post(`/api/events/${eventID}/join`);
};

export const unjoinEvent = eventID => {
    return axios.post(`/api/events/${eventID}/unjoin`);
};

export const fetchUserEvents = userID => {
    return axios.get(`/api/users/${userID}/events`);
};
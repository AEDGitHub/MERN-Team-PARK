import axios from 'axios';

export const fetchInterests = () => {
    return axios.get(`/api/interests/`)
};

export const fetchInterest = interestId => {
    return axios.get(`/api/interests/${interestId}`)
};

export const createInterest = data => {
    return axios.post('/api/interests/', data)
};



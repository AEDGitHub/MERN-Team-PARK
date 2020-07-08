import axios from 'axios';

export const fetchGroup = groupId => {
    return axios.get(`/api/groups/${groupId}`)
};

export const createGroup = data => {
    return axios.post('/api/groups/', data)
};



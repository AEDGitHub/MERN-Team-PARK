import axios from 'axios';

export const fetchGroup = groupId => {
    return axios.get(`/api/groups/${groupId}`)
};

export const fetchUserGroups = userID => {
    return axios.get(`/api/users/${userID}/groups`)
}

export const createGroup = data => {
    return axios.post('/api/groups/', data)
};

export const joinGroup = slug => {
    return axios.post(`/api/groups/${slug}/join`)
}



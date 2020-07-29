import axios from 'axios';

export const fetchUser = () => {
    return axios.get(`/api/users/current`);
};

export const updateUser = (userData) => {
    return axios.patch(`/api/users/profile`, userData);
}

export const createInterest = data => {
    return axios.post('/api/interests/', data);
};

export const followInterest = interestId => {
    return axios.post(`/api/interests/${interestId}/follow`);
}

export const unfollowInterest = interestId => {
    return axios.post(`/api/interests/${interestId}/unfollow`);
}

export const deleteInterest = interestId => {
    return axios.delete(`/api/interests/${interestId}`);
}

export const updateInterest = data => {
    const id = data.get("_id");
    return axios.patch(`/api/interests/${id}`, data)
}
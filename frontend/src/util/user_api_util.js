import axios from 'axios';

export const fetchUser = () => {
    return axios.get(`/api/users/current`);
};

export const createInterest = data => {
    return axios.post('/api/interests/', data);
};

export const followInterest = interestId => {
    return axios.post(`/api/interests/${interestId}/follow`);
}

export const unfollowInterest = interestId => {
    return axios.post(`/api/interests/${interestId}/unfollow`);
}
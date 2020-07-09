import axios from 'axios';

// export const fetchUser = userId => {
//     return axios.get(`/api/users/${userId}`)
// };

export const fetchUser = () => {
    return axios.get(`/api/users/current`)
};

export const createInterest = data => {
    return axios.post('/api/interests/', data)
};
import * as APIUtil from "../util/interest_api_util";

export const RECEIVE_INTEREST = "RECEIVE_INTEREST";
export const RECEIVE_INTERESTS = "RECEIVE_INTERESTS";

const receiveInterest = interest => {
    return {
        type: RECEIVE_INTEREST,
        interest
    }
};

const receiveInterests = interests => {
    return {
        type: RECEIVE_INTERESTS,
        interests
    };
};

export const fetchInterest = interestId => dispatch => {
    return APIUtil.fetchInterest(interestId)
        .then((interest) => dispatch(receiveInterest(interest)))
};

export const fetchInterests = () => dispatch => {
    return APIUtil.fetchInterests()
        .then((interests) => dispatch(receiveInterests(interests)))
};

export const createInterest = data => dispatch => {
    return APIUtil.fetchInterest(data)
        .then((interest) => dispatch(receiveInterest(interest)))
};

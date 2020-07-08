import * as APIUtil from "../util/group_api_util";

export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveGroup = group => ({
    type: RECEIVE_GROUP,
    group
});

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

const clearErrors = () => ({
    type: CLEAR_ERRORS
});



export const fetchGroup = groupId => dispatch => {
    return APIUtil.fetchGroup(groupId)
        .then((group) => dispatch(receiveGroup(group)))
}

export const fetchGroups = userId => dispatch => {
    return APIUtil.fetchUserGroups(userId)
        .then(groups => dispatch(receiveGroups(groups)))
}

export const createGroup = data => dispatch => {
    return APIUtil.createGroup(data)
        .then((group) => dispatch(receiveGroup(group)))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
};


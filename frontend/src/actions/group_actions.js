import * as APIUtil from "../util/group_api_util";

export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_GROUP_JOIN = "RECEIVE_GROUP_JOIN";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveGroup = payload => ({
    type: RECEIVE_GROUP,
    payload
});

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

const receiveGroupJoin = payload => ({
    type: RECEIVE_GROUP_JOIN,
    payload
})


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
        .then((payload) => dispatch(receiveGroup(payload)))
        .then(() => dispatch(clearErrors()))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
};

export const joinGroup = slug => dispatch => {
    return APIUtil.joinGroup(slug)
        .then(payload => dispatch(receiveGroupJoin(payload)))
        .then(() => dispatch(clearErrors()))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
}


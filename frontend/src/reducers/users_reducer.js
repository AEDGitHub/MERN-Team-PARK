import {
    RECEIVE_USER
} from "../actions/user_actions";
import { RECEIVE_GROUP_JOIN, RECEIVE_GROUP } from "../actions/group_actions";
import { processSinglePhoto } from "../util/photo_util";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            let receivedUser = action.user.data || action.user;
            processSinglePhoto(receivedUser);
            nextState[receivedUser._id] = receivedUser;
            return nextState;
        case RECEIVE_GROUP_JOIN:
            let { user } = action.payload.data;
            processSinglePhoto(user);
            nextState[user._id] = user;
            return nextState;
        case RECEIVE_GROUP:
            if (action.payload.data.user) {
                let receivedUser = action.payload.data.user;
                processSinglePhoto(receivedUser);
                nextState[action.payload.data.user._id] = receivedUser;
            } else {
                action.payload.data.users.forEach(user => {
                    processSinglePhoto(user);
                    nextState[user._id] = user;
                })
            }
            return nextState;
        default:
            return oldState
    }
}

export default usersReducer;
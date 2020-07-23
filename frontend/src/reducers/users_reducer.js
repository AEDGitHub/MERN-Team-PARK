import {
    RECEIVE_USER
} from "../actions/user_actions";
import { RECEIVE_GROUP_JOIN, RECEIVE_GROUP } from "../actions/group_actions";
import { arrayBufferToBase64 } from "../util/photo_util";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            let receivedUser = action.user.data || action.user;

            if (receivedUser.img) {
                const base64Flag = `data:${receivedUser.img.contentType};base64,`;
                const imageStr = arrayBufferToBase64(receivedUser.img.data.data);
                receivedUser.img = base64Flag + imageStr;
            }

            nextState[receivedUser._id] = receivedUser;
            return nextState
        case RECEIVE_GROUP_JOIN:
            let { user } = action.payload.data;
            nextState[user._id] = user;
            return nextState;
        case RECEIVE_GROUP:
            if (action.payload.data.user) {
                nextState[action.payload.data.user._id] = action.payload.data.user;
            } else {
                action.payload.data.users.forEach(user => {
                    nextState[user._id] = user
                })
            }
            return nextState;
        default:
            return oldState
    }
}

export default usersReducer;
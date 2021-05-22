import { GET_USER_INFO_SUCCESS } from "../../actions/action-types";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
           return action.payload;
        default:
            return state;
    }
}
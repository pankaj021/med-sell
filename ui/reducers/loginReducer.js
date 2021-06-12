import { LOGIN_SUCCESS } from "../actions/action-types";

const initState = {isLoggedIn: false, username: ''};

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
           return  {isLoggedIn: true, username: action.payload.username}
        default:
            return state;
    }
}
import { GET_CONTRIBUTORS } from "../../actions/action-types";

export default function contributorsReducers(state = [], action) {
    switch (action.type) {
        case GET_CONTRIBUTORS:
           return action.payload;
        default:
            return state;
    }
}
import { GET_CONTACT_SUCCESS } from "../../actions/action-types";

export default function contactReducer(state = [], action) {
    switch (action.type) {
        case GET_CONTACT_SUCCESS:
           return action.payload;
        default:
            return state;
    }
}
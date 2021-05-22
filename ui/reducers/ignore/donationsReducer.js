import { GET_DONATIONS } from "../../actions/action-types";

export default function donationsReducers(state = [], action) {
    switch (action.type) {
        case GET_DONATIONS:
           return action.payload;
        default:
            return state;
    }
}
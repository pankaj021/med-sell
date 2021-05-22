import { GET_TARGETS } from "../../actions/action-types";

export default function targetReducer(state = [], action) {
    switch (action.type) {
        case GET_TARGETS:
           return action.payload;
        default:
            return state;
    }
}
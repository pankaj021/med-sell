import { GET_TEACHERS } from "../../actions/action-types";

export default function teacherReducer(state = [], action) {
    switch (action.type) {
        case GET_TEACHERS:
           return action.payload;
        default:
            return state;
    }
}
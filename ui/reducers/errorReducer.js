import { IS_ERROR } from "../actions/action-types";

const initState = {isError: false, errorMsg: ""};

export default function errorReducer(state = initState, action) {
    switch (action.type) {
        case IS_ERROR:
           return  {isError: true, errorMsg: action.payload}
        default:
            return initState;
    }
}
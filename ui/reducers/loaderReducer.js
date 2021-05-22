import { IS_LOADING } from "../actions/action-types";

const initState = {isLoading: false, loadingMsg: ""};

export default function loaderReducer(state = initState, action) {
    switch (action.type) {
        case IS_LOADING:
           return {isLoading: true, loadingMsg: action.paylaod}
        default:
            return initState;
    }
}
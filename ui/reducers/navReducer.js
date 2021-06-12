import { ADD_DETAIL, VIEW_DETAIL } from "../actions/action-types";

const initState = {view: 1, addActiveClass: 'hd-action-i--active', viewActiveClass: ''};

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case ADD_DETAIL:
           return initState;
        case VIEW_DETAIL:
           return {view: 2, addActiveClass: '', viewActiveClass: 'hd-action-i--active'}
        default:
            return initState;
    }
}
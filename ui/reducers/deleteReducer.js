import * as actions from '../actions/action-types';

const initState = [];

export const deleteReducer = ( state = initState, action ) => {
    switch (action.type) {
        case actions.DELETE_SUCCESS:
            return state.filter(({ id }) => id !== payload.id);
        default:
            return state   
    }
}
import * as actions from '../actions/action-types';

const initState = [];
export const visitReducer = (state = initState, action) => {
    
    switch (action.type) {
        case actions.VISIT_SUCCESS:
              
            return [
                
               {
                    id: Math.ceil((100000 * Math.random())),
                    otherComment: action.payload.otherComment, 
                    town: action.payload.town,
                    chemist: action.payload.chemist,
                    doctor: action.payload.doctor,
                    product: action.payload.product,

                } ,

                ...state, 
            ]
        case actions.DELETE_SUCCESS:
            return state.filter(({ id }) => id !== action.payload.id);

        case actions.EDIT_SUCCESS:
            
            return state.map((mappedState) => {
                   if (mappedState.id === action.payload.id) {
                    return {
                           ...mappedState,
                            ...payload,
                         };
                   } else {
                    return mappedState;
                  }
      });

        default:
            return state;
    }
}
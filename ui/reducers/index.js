import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';
import errorReducer from './errorReducer';
import navReducer from './navReducer';
import { visitReducer } from './visitReducer';
import { deleteReducer } from './deleteReducer';

export default combineReducers({
    loader: loaderReducer,
    error: errorReducer,
    login: loginReducer,
    navView: navReducer,
    visit: visitReducer,
    delete: deleteReducer,

})




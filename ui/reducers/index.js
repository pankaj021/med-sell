import { combineReducers } from 'redux';
import userReducer from './ignore/userReducer';
import loaderReducer from './loaderReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    user: userReducer,
    loader: loaderReducer,
    error: errorReducer
})
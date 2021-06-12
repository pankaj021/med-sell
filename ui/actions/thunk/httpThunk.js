import axios from 'axios';
import * as actions from '../action-types';

export const httpThunk = (config) => {
    return async(dispatch) => {
        try {
            if(!config.successAction) throw new Error('No action found...');
            dispatch({
                type: actions.IS_LOADING,
                payload: 'Please wait, loading data for you...'
            })
            const response = await axios(config);
            dispatch({
                type: config.successAction,
                payload: response.data || null
            })
        } catch (error) {
            console.log("httpThunk: ", error.message);
            if(error && error.response && error.response.data){
                console.log("error.response.data: ", error.response.data);
            } 
            dispatch({
                type: config.errorAction || actions.IS_ERROR,
                payload: error.message || 'Unknown Error...'
            })
        }
    }
}
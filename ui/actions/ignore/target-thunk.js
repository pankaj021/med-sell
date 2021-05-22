import axios from 'axios';
import { GET_TARGETS, IS_ERROR, IS_LOADING } from '../action-types';

export function getTarget () {
    return async (dispatch) => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: "Loading contact details for you..."
            });
            const res = await axios.get("/target");
            dispatch({
                type: GET_TARGETS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: IS_ERROR,
                payload: "Something went wrong."
            });
        }
    }
}
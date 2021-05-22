import axios from 'axios';
import { GET_CONTRIBUTORS, IS_ERROR, IS_LOADING } from '../action-types';

export function getContributors () {
    return async (dispatch) => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: "Loading contact details for you..."
            });
            const res = await axios.get("/contributor");
            dispatch({
                type: GET_CONTRIBUTORS,
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
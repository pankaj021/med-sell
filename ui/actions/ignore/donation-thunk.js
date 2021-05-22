import axios from 'axios';
import { GET_DONATIONS, IS_ERROR, IS_LOADING } from '../action-types';

export function getDonations () {
    return async (dispatch) => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: "Loading contact details for you..."
            });
            const res = await axios.get("/donation");
            dispatch({
                type: GET_DONATIONS,
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
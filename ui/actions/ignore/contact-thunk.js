import axios from 'axios';
import { GET_CONTACT_SUCCESS, IS_ERROR, IS_LOADING } from '../action-types';

export default function getContacts (token) {
    return async (dispatch) => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: "Loading contact details for you..."
            });
            const res = await axios.post("/contacts", {token});
            dispatch({
                type: GET_CONTACT_SUCCESS,
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
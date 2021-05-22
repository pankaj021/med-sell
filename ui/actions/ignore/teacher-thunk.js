import axios from 'axios';
import { GET_TEACHERS, IS_ERROR, IS_LOADING } from '../action-types';

export function getTeachers () {
    return async (dispatch) => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: "Loading contact details for you..."
            });
            const res = await axios.get("/teacher");
            dispatch({
                type: GET_TEACHERS,
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
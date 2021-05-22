import { GET_USER_INFO_SUCCESS, IS_ERROR } from "../action-types";

export function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        payload: userInfo
    }
}

export function getUserInfoError(userInfo) {
    return {
        type: IS_ERROR,
        payload: userInfo.details || "Error while validating user details."
    }
}
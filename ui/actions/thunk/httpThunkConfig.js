import * as actions from '../action-types';

export const loginConfig = (loginReq) => ({
    "method": 'post',
    "url": '/login',
    "data": loginReq,
    "headers": {},
    "successAction": actions.LOGIN_SUCCESS
})
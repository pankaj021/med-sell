import * as actions from '../action-types';

export const loginConfig = (loginReq) => ({
    "method": 'post',
    "url": '/login',
    "data": loginReq,
    "headers": {},
    "successAction": actions.LOGIN_SUCCESS
})


export const saveVisitConfig = (payload) => {
    
  return  {
    "method": 'post',
    "url": '/visit',
    "data": payload,
    "headers": {},
    "successAction": actions.VISIT_SUCCESS
}}

export const loadDdConfig = () => {
    
  return  {
    "method": 'get',
    "url": '/ddData',
    "data": {},
    "headers": {},
    "successAction": actions.VISIT_SUCCESS
}}

export const deleteVisitConfig = (payload) => {
    
  return  {
    "method": 'post',
    "url": '/delete',
    "data": payload,
    "headers": {},
    "successAction": actions.DELETE_SUCCESS
}}

export const editVisitConfig = (payload) => {
    
  return  {
    "method": 'post',
    "url": '/edit',
    "data": payload,
    "headers": {},
    "successAction": actions.EDIT_SUCCESS
}}
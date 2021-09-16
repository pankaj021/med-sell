import * as actions from '../action-types';

export const selectNavView = (navView) => {
    const navMap = {
        1: actions.ADD_DETAIL,
        2: actions.VIEW_DETAIL
    }
    return {
        type: navMap[navView]
    }
}
export const getVisitAction = (payload) => {
    return {
        "type": actions.SAVE_VISIT,
        "payload": payload
    }
}
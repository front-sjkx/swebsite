import {MODAL_VISIBLE, REGISTER_SUCCESS, REGISTER_FAILURE} from './action-types.js'

export function modalChangeVisible(data) {
    return {
        type: MODAL_VISIBLE,
        patload: data,
    };
}

export function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
}

export function registerFailue(data) {
    return {
        type: REGISTER_FAILURE,
        payload: data,
    };
}

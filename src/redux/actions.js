import {ActionTypes} from '../redux/constants';

export const setProfile = (profile) => {
    return {
        type: ActionTypes.SET_PROFILE,
        payload: profile
    }
};

export const saveUser = (profile) => {
    return {
        type: ActionTypes.UPDATE_USER,
        payload: profile
    }

};
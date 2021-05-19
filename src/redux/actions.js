import {ActionTypes} from '../redux/constants';

export const setProfile = (profileInfo) => {
    return {
        type: ActionTypes.SET_PROFILE,
        payload: profileInfo
    }
};
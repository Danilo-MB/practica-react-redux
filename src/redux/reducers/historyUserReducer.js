import {ActionTypes} from '../constants';

const initialState = [];

export const historyUserReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.UPDATE_USER:
            state.push(payload, ...state);
            console.log(state)
            return state;
        default:
            return state;
    }
};


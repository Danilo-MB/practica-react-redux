import {ActionTypes} from '../constants';
import produce from 'immer';

const initalState = {
    name:'Joa',
    lastName:'Sarasa',
    imageUrl:'imageUrl'
};

export const profileReducer = (state = initalState, {type, payload}) => {
    console.log(type);
    switch(type){
        case ActionTypes.SET_PROFILE:
            return {...state, payload};
        default:
            return state;
    }
    
};
import {ActionTypes} from '../constants';
//import produce from 'immer';

const initalState = {
    name:'Joa',
    lastName:'Sarasa',
    imageUrl:'imageUrl'
};

export const profileReducer = (state = initalState, {type, payload}) => {
    //console.log("type", type, payload);
    switch(type){
        case ActionTypes.SET_PROFILE:
            const newState = {...state, ...payload};
            //console.log("newState", newState);
            return newState;
        default:
            return state;
    }
    
};
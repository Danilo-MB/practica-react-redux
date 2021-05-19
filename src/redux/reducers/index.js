import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';

const reducers = combineReducers({
    profileInfo: profileReducer
}); 


export default reducers;
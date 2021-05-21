import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {historyUserReducer} from './historyUserReducer';

const reducers = combineReducers({
    profileInfo: profileReducer,
    userInfo: historyUserReducer
}); 



export default reducers;
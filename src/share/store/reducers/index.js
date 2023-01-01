import { combineReducers } from 'redux';
import userReducer from './userreducer';

// {user: []}
export default combineReducers({
    user: userReducer
});

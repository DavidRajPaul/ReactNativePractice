import { combineReducers } from 'redux';
import UserNameReducer from './UserNameReducer'
export default combineReducers({
    unr: UserNameReducer
});

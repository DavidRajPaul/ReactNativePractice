import { USERNAME_CHANGED } from '../actions/types';


const INITIAL_STATE = { username: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload }
        default:
            return state;
    }
}
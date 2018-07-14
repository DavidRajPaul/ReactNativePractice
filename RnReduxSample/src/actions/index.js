import { USERNAME_CHANGED } from './types';

export const userNameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    }
}
/* eslint-disable prettier/prettier */
import { AuthState } from './AuthContext';


type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username',
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        default:
            return state;
    }
};


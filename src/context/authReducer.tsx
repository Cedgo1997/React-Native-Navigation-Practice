/* eslint-disable prettier/prettier */
import { AuthState } from './AuthContext';


type AuthAction = {
    type: 'signIn'
}

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username',
            };
        default:
            return state;
    }
};


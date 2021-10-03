import { AuthState } from './AuthContext';


type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logout' }
    | { type: 'setUser', payload: string }

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
        case 'logout':
            return {
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };
        case 'setUser':
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};


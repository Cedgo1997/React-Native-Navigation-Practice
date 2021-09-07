/* eslint-disable prettier/prettier */

import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    setUser: (user: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const setUser = (user: string) => {
        dispatch({ type: 'setUser', payload: user });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            setUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {
    const { authState: { isLoggedIn }, logout } = useContext(AuthContext);
    return (
        <View>
            <Text>Album Screen</Text>
            {isLoggedIn && (<Button title="Logout" onPress={logout} />)}
        </View>
    );
};

import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { authState: { isLoggedIn }, signIn } = useContext(AuthContext);


    return (
        <View>
            <Text>Contacts Screen</Text>
            {!isLoggedIn && (<Button onPress={signIn} title="SignIn" />)}
        </View>
    );
};

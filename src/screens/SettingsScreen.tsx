/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{marginTop: insets.top}}>
            <Text>Settings Screen</Text>
        </SafeAreaView>
    );
};

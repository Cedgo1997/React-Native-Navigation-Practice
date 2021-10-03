import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Icons</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="person-outline" />
            </Text>
        </View>
    );
};

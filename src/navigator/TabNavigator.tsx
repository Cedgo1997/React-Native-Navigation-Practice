/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarActiveTintColor: colors.primary,
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'T1';
                                break;
                            case 'Tab2Screen':
                                iconName = 'T2';
                                break;
                            case 'StackNavigator':
                                iconName = 'ST';
                                break;
                        }
                        return (<Text style={{ color }}>{iconName}</Text>);
                    }
                })
            }>
            <Tab.Screen options={{ title: 'Tab 1' }} name="Tab1Screen" component={Tab1Screen} />
            <Tab.Screen options={{ title: 'Tab 2' }} name="Tab2Screen" component={Tab2Screen} />
            <Tab.Screen options={{ title: 'Stack' }} name="StackNavigator" component={StackNavigator} />
        </Tab.Navigator>
    );
}
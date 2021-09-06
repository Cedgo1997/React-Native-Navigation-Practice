/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabNavigator = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};


const BottomTabIOS = createBottomTabNavigator();


export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarActiveTintColor: colors.primary,
                    tabBarIcon: ({ color }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'analytics-outline';
                                break;
                            case 'TopTabNavigator':
                                iconName = 'add-circle-outline';
                                break;
                            case 'StackNavigator':
                                iconName = 'attach-outline';
                                break;
                        }
                        return (<Icon name={iconName} size={20} color={color} />);
                    },
                })
            }>
            <BottomTabIOS.Screen options={{ title: 'Tab 1' }} name="Tab1Screen" component={Tab1Screen} />
            <BottomTabIOS.Screen options={{ title: 'TopTab' }} name="TopTabNavigator" component={TopTabNavigator} />
            <BottomTabIOS.Screen options={{ title: 'Stack' }} name="StackNavigator" component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator sceneAnimationEnabled={true} barStyle={{
            backgroundColor: colors.primary,
        }} screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'analytics-outline';
                            break;
                        case 'TopTabNavigator':
                            iconName = 'add-circle-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'attach-outline';
                            break;
                    }
                    return (<Icon name={iconName} size={20} color={color} />);
                },
            })
        } >
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTabNavigator" component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};

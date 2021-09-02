/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';


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
                    },
                })
            }>
            <BottomTabIOS.Screen options={{ title: 'Tab 1' }} name="Tab1Screen" component={Tab1Screen} />
            <BottomTabIOS.Screen options={{ title: 'Tab 2' }} name="Tab2Screen" component={Tab2Screen} />
            <BottomTabIOS.Screen options={{ title: 'Stack' }} name="StackNavigator" component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator sceneAnimationEnabled={true} barStyle={{
            backgroundColor: colors.primary
        }} screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarIcon: ({ color }) => {
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
                },
            })
        } >
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" component={Tab2Screen} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

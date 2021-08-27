import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
            screenOptions={
                () => ({
                    tabBarActiveTintColor: colors.primary,
                })
            }>
            <Tab.Screen options={{title: 'Tab 1'}} name="Tab1Screen" component={Tab1Screen} />
            <Tab.Screen options={{title: 'Tab 2'}} name="Tab2Screen" component={Tab2Screen} />
            <Tab.Screen options={{title: 'Stack'}} name="StackNavigator" component={StackNavigator} />
        </Tab.Navigator>
    );
}
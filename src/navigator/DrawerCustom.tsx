/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerCustom = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{
            headerShown: false,
            drawerType: width > height ? 'permanent' : 'front',
        }}

        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View>
                <Image style={styles.avatar} source={{ uri: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-10.jpg' }} />
            </View>
            <View style={styles.drawerItemsContainer}>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={ () => {navigation.navigate('StackNavigator')} }
                >
                    <Text style={styles.drawerText}>Navegación Stack</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={ () => {navigation.navigate('SettingsScreen')} }
                >
                    <Text style={styles.drawerText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
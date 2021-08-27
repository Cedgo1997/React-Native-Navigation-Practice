/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* import { DrawerNavigator } from './src/navigator/DrawerNavigator'; */
import { DrawerCustom } from './src/navigator/DrawerCustom';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerCustom />
    </NavigationContainer>
  );
};


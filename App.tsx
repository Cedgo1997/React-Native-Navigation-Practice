import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerCustom } from './src/navigator/DrawerCustom';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerCustom />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

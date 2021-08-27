/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button title="Ir a página 3" onPress={() => navigation.navigate('Pagina3Screen')} />
        </View>
    );
};

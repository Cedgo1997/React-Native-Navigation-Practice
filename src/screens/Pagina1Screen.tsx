/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button title="Ir a página 2" onPress={() => navigation.navigate('Pagina2Screen')} />

            <Text>Navigate with args</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Pedro',
                })}
            >
                <Text>Pedro</Text>
            </TouchableOpacity>
        </View>
    );
};

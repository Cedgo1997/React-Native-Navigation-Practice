/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { DrawerScreenProps } from '@react-navigation/drawer';
/* import { StackScreenProps } from '@react-navigation/stack';*/
import React from 'react';
import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

/* interface Props extends StackScreenProps<any, any> { } */
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                width < height && (<Button title="Menu" onPress={() => { navigation.toggleDrawer() }} />)
            ),
        });
    }, [width, height, navigation]);


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button title="Ir a página 2" onPress={() => navigation.navigate('Pagina2Screen')} />

            <Text>Navigate with args</Text>

            <View style={{
                flexDirection: 'row',
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro',
                    })}
                    style={styles.bigButton}
                >
                    <Text style={styles.bigButtonText}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Juan',
                    })}
                    style={styles.bigButton}
                >
                    <Text style={styles.bigButtonText}>Juan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

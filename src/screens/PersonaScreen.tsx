/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const PersonaScreen = ({ route, navigation }: Props) => {
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre,
        });
    }, [params, navigation]);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>PersonaScreen</Text>
            <Text style={styles.title}>{
                JSON.stringify(params, null, 3)
            }</Text>
        </View>
    );
};

import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {
    const params = route.params;

    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        });

    }, [params, navigation, setUser]);

    useEffect(() => {
        setUser(params.nombre);
    });

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>PersonaScreen</Text>
            <Text style={styles.title}>{
                JSON.stringify(params, null, 3)
            }</Text>
        </View>
    );
};

/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6',

};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 10,
    },
    drawerItemsContainer: {
        alignContent: 'center',
    },
    drawerItem: {
        marginVertical: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
    },
    drawerIcon: {
        marginHorizontal: 5,
    },
    drawerText: {
        fontSize: 20,
        textAlign: 'center',
    },
});

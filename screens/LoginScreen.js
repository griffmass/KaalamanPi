import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation, setisLoggedIn }) => {
    const handleLogin = () => {
        setisLoggedIn(true);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    });

    export default LoginScreen
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text>This is the About Us page of the ap.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
},
});

export default AboutUsScreen
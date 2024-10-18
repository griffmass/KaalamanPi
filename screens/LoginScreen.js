import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

const logo = require('../assets/images/logo.png');
const backgroundImage = require('../assets/images/math.jpg');

const LoginScreen = ({ navigation, setisLoggedIn }) => {

    const [fontsLoaded] = Font.useFonts({
        'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    if (!fontsLoaded) {
        return <Apploading />;
    }

    const handleLogin = () => {
        const validUsername = 'user';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            setisLoggedIn(true);
            navigation.navigate('Home');
        } else {
            alert('Invalid credentials. Please try again.');
        }

    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            {/*Overlay */}
            <View style={styles.overlay}/>
        <View style={styles.container}>

            {/* Logo */}
            <Image 
                source={logo}
                style={styles.logo}
            />

            {/* Username Input with Icon*/}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            </View>
            
            {/* Password Input */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            </View>

            {/* Custom Remember Me with Icon */}
            <View style={styles.rememberForgotContainer}>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <Icon
                        name={rememberMe ? "check-square" : "square-o"}
                        size={20}
                        color="#fff"
                        style={{ position: 'relative', top: -2}}
                    />

                    <Text style={[styles.smallText, { marginLeft: 5}]}>Remember me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.smallText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Sign In */}
            <View style={styles.signInContainer}>
                <Text style={styles.smallText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
};
 
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
        opacity: 0.9,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    icon: {
        marginLeft: 5,
    },
    input: {
        height: 44,
        fontSize: 15,
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: 'Poppins-SemiBold',
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    smallText: {
        fontSize: 9,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1},
        textShadowRadius: 2,
    },
    loginButton: {
        width: '70%',
        backgroundColor: '#F2B705',
        paddingVertical: 9,
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    loginButtonText: {
        color: '#3C3D37',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    signInContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signInText: {
        fontSize: 9,
        color: '#F2B705',
        marginLeft: 5,
        fontFamily: 'Poppins-SemiBold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1},
        textShadowRadius: 2,
    },
    });

    export default LoginScreen
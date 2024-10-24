import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import colors from '../components/colors';

    // Import Logo and Background Image
const logo = require('../assets/images/logo/kaalamanpi-vector-text.png');
const backgroundImage = require('../assets/images/landing-page/math.jpg');

const LoginScreen = ({ navigation, setisLoggedIn }) => {
        // Load the custom font [ Poppins-SemiBold ]
    const [fontsLoaded] = Font.useFonts({
        'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    });
    // Variables for username, pass, and rememberme check box
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#F2B705" />;
    }
    // handle the login functionality
    const handleLogin = () => {
        const validUsername = '';
        const validPassword = '';
        // check if the username and password are correct
        if (username === validUsername && password === validPassword) {
            setisLoggedIn(true);
            navigation.navigate('Home');
        } else {
            alert('Invalid credentials. Please try again.');
        }

    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            {/* Dark overlay over the background image */}
            <View style={styles.overlay}/>
            {/* Container for the login form */}
        <View style={styles.container}>
            {/* Logo */}
            <Image 
                source={logo}
                style={styles.logo}
            />

            {/* Username Input with User Icon*/}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            </View>
            
            {/* Password Input with Lock Icon */}
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

    // Background image for the login screen
    background: {
        flex: 1,
        resizeMode: 'cover',
    },

    // Dark overlay to improve text readability over the background image
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.blackoverlay,
    },

    // Main container for the login form
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    
    // Logo styling
    logo: {
        width: 300,
        height: 200,
        marginBottom: 10,
        opacity: 0.9,
    },
    // Input container styling for username and password fields
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.transparentwhite,
        elevation: 5,
    },
    // icons [user] & [lock]
    icon: {
        marginLeft: 5,
        color: colors.black,
    },
    // Text input styling 
    input: {
        height: 44,
        fontSize: 15,
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: 'Poppins-SemiBold',
        color: colors.black,
    },
    // Container for the 'Remember me' and 'Forgot Password' options
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        marginBottom: 20,
    },
    // Container for the 'Remember me' checkbox
    checkboxContainer: {
        flexDirection: 'row',
    },
    // styles for small texts
    smallText: {
        fontSize: 9,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        textShadowColor: colors.shadow,
        textShadowOffset: { width: 1, height: 1},
        textShadowRadius: 2,
    },
    // Login Button Design
    loginButton: {
        width: '70%',
        backgroundColor: colors.transparentdarker,
        paddingVertical: 9,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 5,
    },
    // Login Button Text Design
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    // Container for SIGN IN
    signInContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    // Text styling for SIGN IN
    signInText: {
        fontSize: 9,
        color: colors.gold,
        marginLeft: 5,
        fontFamily: 'Poppins-SemiBold',
    },
    });

    export default LoginScreen
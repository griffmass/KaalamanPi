import React, { useState, useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    ImageBackground, 
    ActivityIndicator, 
    Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import colors from '../components/colors';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

// Import Logo and Background Image
const logo = require('../assets/images/logo/kaalamanpi-vector-text.png');
const backgroundImage = require('../assets/images/landing-page/math.jpg');

const LoginScreen = ({ navigation, setisLoggedIn = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    // Check login status on app start
    useEffect(() => {
        const checkAuthState = async () => {
            try {
                setLoading(true); // Show a loader during auto-login attempt
    
                const storedEmail = await AsyncStorage.getItem('email');
                const storedPassword = await AsyncStorage.getItem('password');
                const storedRememberMe = JSON.parse(await AsyncStorage.getItem('rememberMe'));
    
                if (storedRememberMe && storedEmail && storedPassword) {
                    try {
                        await signInWithEmailAndPassword(auth, storedEmail, storedPassword);
                        setisLoggedIn(true);
                        navigation.navigate('Home');
                    } catch (error) {
                        console.error('Auto-login failed:', error.message);
                        await AsyncStorage.multiRemove(['email', 'password', 'rememberMe']);
                    }
                }
            } catch (error) {
                console.error('Error checking auth state:', error.message);
            } finally {
                setLoading(false); // Stop the loader
            }
        };
    
        checkAuthState();
    }, []);
    
    

    // LOGIN FUNCTION WITH FIREBASE
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter your email and password.');
            return;
        }

        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setisLoggedIn(true);

            // Save credentials if "Remember Me" is checked
            if (rememberMe) {
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('password', password);
                await AsyncStorage.setItem('rememberMe', JSON.stringify(true));
            } else {
                await AsyncStorage.removeItem('email');
                await AsyncStorage.removeItem('password');
                await AsyncStorage.setItem('rememberMe', JSON.stringify(false));
            }

            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            setEmail('');
            setPassword('');
            setRememberMe(false);
        }, [])
    );

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay} />
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={logo} style={styles.logo} />
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Icon name="envelope" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                
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

                <View style={styles.rememberForgotContainer}>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <Icon
                            name={rememberMe ? 'check-square' : 'square-o'}
                            size={20}
                            color="#fff"
                            style={{ position: 'relative', top: -2 }}
                        />
                        <Text style={[styles.smallText, { marginLeft: 5 }]}>Remember me</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style={styles.smallText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Login</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.signInContainer}>
                    <Text style={styles.smallText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signInText}>Sign Up</Text>
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
        backgroundColor: colors.blackoverlay,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 10,
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
        backgroundColor: colors.transparentwhite,
        elevation: 5,
    },
    icon: {
        color: colors.black,
    },
    input: {
        height: 44,
        fontSize: 15,
        flex: 1,
        paddingLeft: 13,
        fontFamily: "Poppins-SemiBold",
        color: colors.black,
        paddingTop: 5,
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
        textShadowColor: colors.shadow,
        textShadowOffset: { width: 1, height: 1},
        textShadowRadius: 2,
    },
    loginButton: {
        width: '70%',
        backgroundColor: colors.transparentdarker,
        paddingVertical: 9,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 5,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    signInContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signInText: {
        fontSize: 9,
        color: colors.gold,
        marginLeft: 5,
        fontFamily: 'Poppins-SemiBold',
    },
});

export default LoginScreen;

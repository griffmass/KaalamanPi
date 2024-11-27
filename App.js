import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font'; // Import expo-font
import { ActivityIndicator, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'; // <==== SignUp Screen
import AboutUsScreen from './screens/AboutUsScreen';
import CustomHeader from './components/CustomHeader';
import ProfileScreen from './screens/ProfileScreen';
import Statistics_Probability from './screens/Statistics_Probability'; // Importing the ToggleStats screen
import Algebra from './screens/Algebra'; 
import Geometry from './screens/Geometry'; 
import Counter from './screens/Counter';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load Potta_One font
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Protest-Riot': require('./assets/fonts/Protest_Riot/ProtestRiot-Regular.ttf'), // Make sure the path is correct
        'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf'), //
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  // Show a loader until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {props => <LoginScreen {...props} setisLoggedIn={setisLoggedIn} />}
        </Stack.Screen>

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => <CustomHeader /> }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ header: () => <CustomHeader /> }}
        />

        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ header: () => <CustomHeader /> }}
        />

        {/* Adding the ToggleStats screen to the navigator */}
        <Stack.Screen
          name="ToggleStats"
          component={Statistics_Probability}
          options={{ header: () => <CustomHeader /> }} // Customize the header as needed
        />

      <Stack.Screen
          name="ToggleAlgebra"
          component={Algebra}
          options={{ header: () => <CustomHeader /> }} // Customize the header as needed
        />

        <Stack.Screen
          name="ToggleGeometry"
          component={Geometry}
          options={{ header: () => <CustomHeader /> }} // Customize the header as needed
        />

        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{ header: () => <CustomHeader /> }} // Customize the header as needed
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

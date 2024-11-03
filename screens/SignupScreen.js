import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import * as Font from "expo-font";
import colors from "../components/colors";
import { useFocusEffect } from "@react-navigation/native"; // reset inputs

const logo = require("../assets/images/logo/kaalamanpi-vector-text.png");
const backgroundImage = require("../assets/images/landing-page/math.jpg");
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  const isFormValid = () =>
    email.includes("@") &&
    password === confirmPassword &&
    password.length >= 8 &&
    agreeToTerms;

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email, matching passwords with at least 8 characters, and agree to the Terms & Conditions."
      );
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

    // For secuirty we reset the inputs
    useFocusEffect(
        useCallback(() => {
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAgreeToTerms(false);
        }, [])
    );

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#F2B705" />;
  }

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
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Terms & Conditions Checkbox */}
        <View style={styles.rememberForgotContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setAgreeToTerms(!agreeToTerms)}
          >
            <Icon
              name={agreeToTerms ? "check-square" : "square-o"}
              size={20}
              color="#fff"
              style={{ position: "relative", top: -2 }}
            />
            <Text style={[styles.smallText, { marginLeft: 5 }]}>
              I agree to the 
            <Text style={{ color: colors.gold }}> Terms & Conditions</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.signupButtonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <View style={styles.signInContainer}>
          <Text style={styles.smallText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signInText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blackoverlay,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 10,
    opacity: 0.9,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    borderColor: "#ccc",
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
  signupButton: {
    marginTop: 25,
    width: "70%",
    backgroundColor: colors.transparentdarker,
    paddingVertical: 9,
    borderRadius: 5,
    alignItems: "center",
    elevation: 5,
  },
  signupButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  smallText: {
    fontSize: 9,
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    textShadowColor: colors.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  signInText: {
    fontSize: 9,
    color: colors.gold,
    marginLeft: 5,
    fontFamily: "Poppins-SemiBold",
  },
  rememberForgotContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SignupScreen;

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../components/colors";
import { logout } from '../components/Logout';



const Options = ({ text, onPress }) => (
  <TouchableOpacity style={styles.options} onPress={onPress}>
    <View style={styles.rowOption}>
      <Text style={styles.textOption}>{text}</Text>
      <Image source={require("../assets/images/arrow/arrowright.png")} style={styles.arrowIcon} />
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const navigation = useNavigation();

  const ProfileOptions = [
    { text: "My Profile" },
    { text: "Languages & region" },
    { text: "Help & feedback" },
    { text: "Rate the app" },
    { text: "Terms of service" },
    { text: "Licenses" },
    { text: "Delete account" },
    { text: "Logout", action: () => logout(navigation) }, // Use logout function
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture and Name */}
      <View style={styles.profileSection}>
        <View style={styles.imageShadowContainer}>
          <Image source={require("../assets/images/people/jm.jpg")} style={styles.profilePicture} />
        </View>
        <Text style={styles.profileName}>JM Abanil</Text>
      </View>

      {/* Options */}
      {ProfileOptions.map((item, index) => (
        <Options key={index} text={item.text} onPress={item.action || (() => {})} />
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLogoTextContainer}>
          <Image source={require("../assets/images/logo/logo.png")} style={styles.footerLogo} />
          <Text style={styles.footerLogoText}>SenseLink</Text>
        </View>
        <Text style={styles.textFooter}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
    // Container of Whole UI
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.lighter,
  },

  // Profile Section
  profileSection: {
    marginBottom: 30,
  },

  // Minimal Shadows
  imageShadowContainer: {
    elevation: 8,
    borderRadius: 50,
  },

  // Profile Picture [IMAGE]
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  // Profile Name [ JM Abanil ]
  profileName: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
  },

  // row options [CONTAINER]
  options: {
    width: '100%',
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 4,
  },

  // position of row option and arrow facing right [ > ]
  rowOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // text options
  textOption: {
    fontSize: 15,
    color: colors.darker,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 12,
  },

  // custom right arrow [ > ]
  arrowIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  // FOOTER [ CONTAINER ]
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },

  // footer [LOGO AND TEXT] position
  footerLogoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  // team logo
  footerLogo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },

  // team name
  footerLogoText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
  },

  // By signing in...
  textFooter: {
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
  },


})
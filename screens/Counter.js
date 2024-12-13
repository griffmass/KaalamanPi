import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue } from "firebase/database";
import { rtdb } from "../firebaseConfig";
import colors from "../components/colors";

function Counter() {
  const navigation = useNavigation();
  const [sensorData, setSensorData] = useState({
    temp: 0,
    humid: 0,
    dist_in_cm: 0,
  });

  useEffect(() => {
    const distanceRef = ref(rtdb, "sensorReading2/dist_in_cm");
    const humidityRef = ref(rtdb, "sensorReading2/humid");
    const temperatureRef = ref(rtdb, "sensorReading2/temp");
  
    const unsubscribeTemp = onValue(temperatureRef, (snapshot) => {
      setSensorData((prevData) => ({
        ...prevData,
        temp: snapshot.val(),
      }));
    });
  
    const unsubscribeHumidity = onValue(humidityRef, (snapshot) => {
      setSensorData((prevData) => ({
        ...prevData,
        humid: snapshot.val(),
      }));
    });
  
    const unsubscribeDistance = onValue(distanceRef, (snapshot) => {
      setSensorData((prevData) => ({
        ...prevData,
        dist_in_cm: snapshot.val(),
      }));
    });
  
    return () => {
      unsubscribeTemp();
      unsubscribeHumidity();
      unsubscribeDistance();
    };
  }, []);
  
  

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => navigation.navigate("Login") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.divider} />
        <TouchableOpacity onPress={() => navigation.navigate("Info")}>
          <Image
            source={require("../assets/info-icon.png")}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sensor Data Section */}
      <View style={[styles.dataContainer, styles.shadow]}>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Temperature</Text>
          <Image
            source={require("../assets/temperature-icon.png")}
            style={styles.dataIcon}
          />
          <Text style={styles.dataValue}>{sensorData.temp}°C</Text>
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Humidity</Text>
          <Image
            source={require("../assets/humidity-icon.png")}
            style={styles.dataIcon}
          />
          <Text style={styles.dataValue}>{sensorData.humid}%</Text>
        </View>
      </View>

      {/* Distance Section */}
      <View style={[styles.distanceContainer, styles.shadow]}>
        <Text style={styles.distanceLabel}>Distance:</Text>
        <Text style={styles.distanceValue}>{sensorData.dist_in_cm} cm</Text>
      </View>



      {/* Navigation Footer */}
      <View style={styles.footerNav}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/home-icon.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../assets/profile-icon.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={handleLogout}
        >
          <Image
            source={require("../assets/exit-icon.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  infoIcon: {
    marginTop: -27,
    width: 40,
    height: 40,
    marginLeft: -40, // Adjust this value to move it further left
  },
  
  divider: {
    height: 3,
    backgroundColor: colors.black,
    marginTop: 40,
    marginBottom: 5,
    width: "100%",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: 40,
    borderRadius: 10,
    marginBottom: 30,
  },
  dataBox: {
    alignItems: "center",
    flex: 1,
  },
  dataLabel: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.black,
  },
  dataValue: {
    fontSize: 36,
    fontFamily: "Potta-One",
    color: colors.black,
  },
  dataIcon: {
    width: 24,
    height: 24,
    marginTop: 5,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 10,
    marginBottom: 30,
  },
  distanceLabel: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: colors.black,
  },
  distanceValue: {
    fontSize: 18,
    fontFamily: "Potta-One",
    color: colors.black,
  },
  settingsContainer: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  settingsIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  settingsLabel: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: colors.black,
  },
  footerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 10,
  },
  footerButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Counter;
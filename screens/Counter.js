import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue, set } from "firebase/database";
import { rtdb } from "../firebaseConfig";
import colors from "../components/colors";

function Counter() {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueRef = ref(rtdb, "value");
    return onValue(valueRef, (snapshot) => {
      setValue(snapshot.val());
    });
  }, []);

  const handlePlus = () => {
    const valueRef = ref(rtdb, "value");
    set(valueRef, value + 1);
  };

  const handleMinus = () => {
    const valueRef = ref(rtdb, "value");
    set(valueRef, value - 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Counter</Text>

      {/* Counter Display */}
      <View style={styles.counterContainer}>
        <Text style={styles.valueText}>{value}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleMinus}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePlus}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.navButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 36,
    fontFamily: "Protest-Riot",
    color: colors.white,
    marginVertical: 20,
  },
  counterContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "90%",
  },
  valueText: {
    fontSize: 100,
    fontFamily: "Protest-Riot",
    color: colors.black,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: colors.lighter,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Protest-Riot",
    color: colors.white,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 10,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  navButtonText: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: colors.lighter,
    fontWeight: "bold"
  },
});

export default Counter;

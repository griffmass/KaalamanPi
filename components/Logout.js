import { Alert } from "react-native";

export const logout = (navigation) => {
  Alert.alert(
    "Logout Confirmation",
    "Are you sure you want to logout?",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: () => {
          navigation.navigate("Login");
        },
      },
    ],
    { cancelable: true }
  );
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const logout = async (navigation) => {
    Alert.alert(
        "Logout Confirmation",
        "Are you sure you want to logout?",
        [
            { text: "Cancel", style: "cancel" },
            {
                text: "Logout",
                onPress: async () => {
                    await AsyncStorage.multiRemove(['email', 'password', 'rememberMe']);
                    navigation.navigate("Login");
                },
            },
        ],
        { cancelable: true }
    );
};

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWL799ZQvGxstnlDMocU8j-SN3x4T0vkQ",
  authDomain: "kaalamanpi.firebaseapp.com",
  databaseURL: "https://kaalamanpi-default-rtdb.firebaseio.com/",
  projectId: "kaalamanpi",
  storageBucket: "kaalamanpi.appspot.com",
  messagingSenderId: "415785359017",
  appId: "1:415785359017:web:e287bcf3a66ce61598fbb8",
  measurementId: "G-HDLQJZD7E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Realtime Database
export const rtdb = getDatabase(app);

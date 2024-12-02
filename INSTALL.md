# User Manual: Firebase Integration with React Native

This guide will help you integrate Firebase with React Native and troubleshoot issues during installation and development.

---

## 1. Install Required Dependencies
Open your VS Code terminal and run:

```bash
npm install firebase
npm install @react-native-firebase/app
npm install @react-native-firebase/auth
npm install -g firebase-tools

```

#

## 2. Set Up a Firebase Project
1. Visit [Firebase](https://firebase.google.com/) and log in with your Google account.
2. Click `Get Started`, create a new project, and name it (e.g., KaalamanPi).
3. Check all the checkboxes and click `Continue` until you reach the Create Project page.
4. Configure Google Analytics:

    - Set the analytics location to Philippines.
    - Check the box and create your project.
    - Wait for it to finish, then click `Continue`.
  
#

## 3. Add Firebase to Your Web App
1. Under "Get started by adding Firebase to your app," click the `Web` icon
2. Register the app:
     - Use the app nickname (e.g., kaalamanpi_db).
     - Click `Register App`.
3. Copy the SDK code provided, and `save it` for later use.
4. Finish setup: Click `Next` and `Continue to Console`

#

## 4. Enable Firebase Authentication
1. In the Firebase Console, go to `Build` > `Authentication`
2. Click `Get Started`.
3. Enable `Email/Password` under Sign-in methods and click `Save`.
       - Optionallym, enable the Anonymous sign-in method for future use.

#

## 5. Set Up Firebase in Your Project
1. Create a file in your working directory: `firebaseConfig.js`
2. Copy your Firebase configuration from the SDK and paste it into `firebaseConfig.js`:
   
   ```javascript
   
    const firebaseConfig = {
      apiKey: "******************************",
      authDomain: "******************************",
      projectId: "******************************",
      storageBucket: "******************************",
      messagingSenderId: "******************************",
      appId: "******************************",
      measurementId: "******************************"
    };
   
   ```

3. Reference code for Firebase setup:

     ```javascript

    // Import the functions you need from the SDKs
    import { initializeApp } from "firebase/app";
    import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
    import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "******************************",
      authDomain: "******************************",
      projectId: "******************************",
      storageBucket: "******************************",
      messagingSenderId: "******************************",
      appId: "******************************",
      measurementId: "******************************"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Auth with AsyncStorage for persistence
    export const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
     
   ```

**Note:** Replace the placeholder (**************) with your actual Firebase configuration values.

---

# 6. Set Up Firebase Realtime Database
1. In the Firebase Console
   
     - Click `All Products` ( icon with 3x3 dots).
     - Select `Realtime Database`.
  
2. Create the database
   
     - Location: `Singapore (asia-southeast1)`.
     - Start in `locked mode`.
     - Click `Enable`.

3. Update security rules:

     - Go to the **Rules** tab.
     - Replace the default rules with:
    #
    ```json
    {
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
    ```

4. Update your `firebaseConfig.js`:

     ```javascript

    import { initializeApp } from "firebase/app";
    import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
    import { getDatabase } from "firebase/database"; // add this line to your existing firebaseConfig.js
    import AsyncStorage from "@react-native-async-storage/async-storage";
    
    const firebaseConfig = {
      apiKey: "******************************",
      authDomain: "******************************",
      databaseURL: "your-reference-url-for-database", // add this line to your configuration, replace with your actual reference url
      projectId: "******************************",
      storageBucket: "******************************",
      messagingSenderId: "******************************",
      appId: "******************************",
      measurementId: "******************************"
    };
    
    const app = initializeApp(firebaseConfig);
    
    export const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });

    export const rtdb = getDatabase(app); // add this line at the end of your code
   ```

   #

   # Troubleshooting
   Issue: "**Project is incompatible with this version of Expo Go**"

   - Error message:
   
     - Installed Expo SDK version is incompatible with the project.

    **Solution:**
    Run the following commands in your vscode terminal:

    ```bash
    npx expo install expo@latest
    npx expo install expo@^52.0.0
    npx expo install --fix
    ```

For detailed steps, check the [Expo SDK Upgrade Guide](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/?fbclid=IwY2xjawG61uJleHRuA2FlbQIxMAABHQnDFq7F4SIojlXkSww8JS9L_U9YgUKhmSicyel8P-tYZKD8k_riW-TBoQ_aem_lpwwxWju35gg8fQteVzAPg).

#

By following this guide, you've successfully integrated Firebase with your React Native using Expo.



     
   
   

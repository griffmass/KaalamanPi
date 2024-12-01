import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../components/colors';

const logo = require('../assets/images/logo/kaalamanpi-vector.png');

const CustomHeader = () => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);
    const [hoverItem, setHoveredItem] = useState(null);

    const currentRoute = useNavigationState((state) => state.routes[state.index].name);

    // Hide the drop down option when the screen changes
    useEffect(() => {
        setMenuVisible(false);  // Close the menu when navigating to a different screen
    }, [currentRoute]);

    return (
        <View style={styles.headerContainer}>
            {/* Logo and Title */}
            <View style={styles.leftContainer}>
                <TouchableOpacity>
                <Image source={logo} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>KaalamanPi</Text>
            </View>

            {/* Navigation Button */}
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setMenuVisible(!menuVisible)}
            >
               <View style={[styles.line, menuVisible && styles.lineActive]} />
               <View style={[styles.line, menuVisible && styles.lineActive]} />
               <View style={[styles.line, menuVisible && styles.lineActive]} />
            </TouchableOpacity>

            {/* Horizontal Dropdown Menu */}
            {menuVisible && (
                <View style={styles.dropdown}>
                    {/* Home Option */}
                    <TouchableOpacity 
                        style={[
                            styles.menuItemContainer,
                            currentRoute === 'Home' ? styles.activeMenuItem : null,
                            hoverItem === 'Home' ? styles.hovered : null,
                            ]}
                            onPress={() => navigation.navigate('Home')}
                            onPressIn={() => setHoveredItem('Home')}
                            onPressOut={() => setHoveredItem(null)}
                    >
                        {/* Home Icon */}
                            <Icon name="home" size={20} color={currentRoute === 'Home' ? '#E3E3D6' : "#555"} style={styles.menuIcon} />
                        {/* Home Text */}
                            <Text style={[
                                styles.menuItem,
                                { color: currentRoute === 'Home' ? '#E3E3D6' : '#555'}]}>
                                    Home
                            </Text>
                    </TouchableOpacity>

                    {/* Profile Option */}
                    <TouchableOpacity 
                        style={[
                            styles.menuItemContainer,
                            currentRoute === 'Profile' ? styles.activeMenuItem : null,
                            hoverItem === 'Profile' ? styles.hovered : null,
                            ]}
                            onPress={() => navigation.navigate('Profile')}
                            onPressIn={() => setHoveredItem('Profile')}
                            onPressOut={() => setHoveredItem(null)}
                    >
                        {/* Profile Icon */}
                            <Icon name="user-circle" size={20} color={currentRoute === 'Profile' ? '#E3E3D6' : "#555"} style={styles.menuIcon} />
                        {/* Profile Text */}
                            <Text style={[
                                styles.menuItem,
                                { color: currentRoute === 'Profile' ? '#E3E3D6' : '#555'}]}>
                                    Profile
                            </Text>
                    </TouchableOpacity>

                    {/* About Us Option */}
                    <TouchableOpacity 
                        style={[
                            styles.menuItemContainer,
                            currentRoute === 'AboutUs' ? styles.activeMenuItem : null,  // Highlight active item
                            hoverItem === 'AboutUs' ? styles.hovered : null,  // Highlight when hovering
                                ]}
                                onPress={() => navigation.navigate('AboutUs')}  // Navigate to About Us screen
                                onPressIn={() => setHoveredItem('AboutUs')}  // On hover
                                onPressOut={() => setHoveredItem(null)}  // Remove hover state
                            >
                        {/* About Us Icon */}
                                <MaterialIcons name="info" size={20} color={currentRoute === 'AboutUs' ? '#E3E3D6' : '#555'} style={styles.menuIcon} />
                        {/* About Us Text */}
                                <Text style={[
                                    styles.menuItem,
                                    { color: currentRoute === 'AboutUs' ? '#E3E3D6' : '#555'} // Change color based on active state
                                    ]}> 
                                        About
                                </Text>
                    </TouchableOpacity>

                    {/* Counter New Added for Activity only */}
                    <TouchableOpacity 
                        style={[
                            styles.menuItemContainer,
                            currentRoute === 'Counter' ? styles.activeMenuItem : null,  // Highlight active item
                            hoverItem === 'Counter' ? styles.hovered : null,  // Highlight when hovering
                                ]}
                                onPress={() => navigation.navigate('Counter')}  // Navigate to About Us screen
                                onPressIn={() => setHoveredItem('Counter')}  // On hover
                                onPressOut={() => setHoveredItem(null)}  // Remove hover state
                            >
                        {/* About Us Icon */}
                                <MaterialIcons name="timer" size={20} color={currentRoute === 'Counter' ? '#E3E3D6' : '#555'} style={styles.menuIcon} />
                        {/* About Us Text */}
                                <Text style={[
                                    styles.menuItem,
                                    { color: currentRoute === 'Counter' ? '#E3E3D6' : '#555'} // Change color based on active state
                                    ]}> 
                                        Counter
                                </Text>
                    </TouchableOpacity>
                </View>
             )}
            {/* Section divider (a line at the bottom of the header) */}
            <View style={styles.sectionDivider} />
        </View>
    );
};

const styles = StyleSheet.create({

    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.lighter,
        marginTop: 30,
        width: '100%',
        alignSelf: 'center',
    },
    // Container of Logo annd Text
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 40,
        height: 40,
        marginRight: 7,
        marginLeft: 10,
        marginBottom: 5,
    },

    headerTitle: {
        marginTop: 6,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: colors.white,
    },
    // Parent of 3 Line navigation button
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,

    },
    // 3 Line navigation button
    line: {
        width: 25,
        height: 3,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: 2,
    },
    // active state when touched
    lineActive: {
        backgroundColor: colors.transparentdarker,
    },
    // drop down navigation
    dropdown: {
        position: 'absolute',
        top: 60,
        right: -6,
        backgroundColor: colors.white,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around', // Ensures items are spaced evenly
        elevation: 5,
    },
    // Container for individual menu items
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15, // Reduced from 17 to tighten spacing
    },
    // Change background of option when touched
    hovered: {
        backgroundColor: colors.black,
        borderRadius: 10, // Reduced from 20
    },
    // Menu item styling (text)
    menuItem: {
        paddingVertical: 5,
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',
        color: colors.black,
    },
    // Custom menu icons
    menuIcon: {
        marginRight: 5,
        color: colors.black,
    },
    // Background of active option
    activeMenuItem: {
        backgroundColor: colors.transparentlighter,
        borderRadius: 10, // Reduced from 20
        elevation: 5,
    },
    // Dark green line on top
    sectionDivider: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: colors.darker,
    },

    
});

export default CustomHeader;
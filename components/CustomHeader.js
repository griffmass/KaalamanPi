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
        right: 0,
        backgroundColor: colors.white,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 5,
    },
    // container of selection [Home, Profile, About Us]
    menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 17,
    },
    // change background of option when touched
    hovered: {
        backgroundColor: colors.black,
        borderRadius: 20,
    },
    // Home, Profile, AboutUs
    menuItem: {
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.black,
    },
    // custom menu icons
    menuIcon: {
        marginRight: 12,
        color: colors.black,
    },
    // background of option
    activeMenuItem: {
        backgroundColor: colors.transparentlighter,
        borderRadius: 20,
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
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/colors';

 const HomeScreen = () => {
    // Defining of navigation and press index event
    const navigation = useNavigation();
    const [pressedIndex, setPressedIndex] = useState(null);

    return (
    // Container of Whole HOME SCREEN User Interface
        <View style={styles.container}>
            {/* Wide Rectangle */}
            <View style={styles.topRectangle} />
            {/* Topics: [TEXT] at the top */}
            <Text style={styles.title}>Topics:</Text>

            {/* Touchable Image that will navigate you to Algebra Page */}
            <TouchableOpacity
                style={[styles.TopicContainer, pressedIndex === 0 && styles.pressed]}
                onPressIn={() => setPressedIndex(0)}
                onPressOut={() => setPressedIndex(null)}
                onPress={() => navigation.navigate("ToggleAlgebra")}
            >
                {/* Algebra Banner */}
                <ImageBackground
                    source={require('../assets/images/topic-banner/algebra.png')}
                    style={[styles.imageStyle, styles.imageRadius]}
                    imageStyle={styles.imageRadius}
                />
            </TouchableOpacity>

            {/* Touchable Image that will navigate you to Geometry Page */}
            <TouchableOpacity
                style={[styles.TopicContainer, pressedIndex === 1 && styles.pressed]}
                onPressIn={() => setPressedIndex(1)}
                onPressOut={() => setPressedIndex(null)}
                onPress={() => navigation.navigate("ToggleGeometry")}
            >
                {/* Geometry Banner */}
                <ImageBackground
                    source={require('../assets/images/topic-banner/geometry.png')}
                    style={[styles.imageStyle, styles.imageRadius]}
                    imageStyle={styles.imageRadius}
                />
            </TouchableOpacity>

            {/* Touchable Image that will navigate you to Statistics and Probability Page */}
            <TouchableOpacity
                style={[styles.TopicContainer, pressedIndex === 2 && styles.pressed]}
                onPressIn={() => setPressedIndex(2)}
                onPressOut={() => setPressedIndex(null)}
                onPress={() => navigation.navigate("ToggleStats")}
            >
                {/* Statistics and Probability Banner */}
                <ImageBackground
                    source={require('../assets/images/topic-banner/statistics_probability.png')}
                    style={[styles.imageStyle, styles.imageRadius]}
                    imageStyle={styles.imageRadius}
                />
            </TouchableOpacity>
            <View style={styles.bottomRectangle} />
        </View>
    )
 };

    const styles = StyleSheet.create({

  // Container of Whole UI
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            padding: 20,
            overflow: 'hidden',
        },
    // Top topRectangle
        topRectangle: {
            width: '120%',
            height: 20,
            backgroundColor: colors.lighter,
            position: 'absolute',
            top: 0,
            zIndex: 1,
            
        },
    // Topics:
        title: {
            fontSize: 50,
            fontFamily: 'Protest-Riot',
            marginBottom: 20,
            marginTop: -80,
            color: colors.lighter,
        },

    // Topic Image Container
        TopicContainer: {
            width: '100%',
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            elevation: 5,
            borderRadius: 10,
            position: 'relative',
        },

    // Topic Image Size
        imageStyle: {
            width: '100%',
            height: '100%',
        },

    // Topic Image Roundness
        imageRadius: {
            borderRadius: 10,
        },
        
    // Touch Event Effect for Topic Images
        pressed: {
            borderWidth: 10,
            borderColor: colors.lighter,
        },
    bottomRectangle: {
        width: '120%',
        height: 30,
        backgroundColor: colors.lighter,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
    }
    })

 export default HomeScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // nag import ako ng navigation dito
import colors from '../components/colors';

const Geometry = () => {

  const navigation = useNavigation(); // this code will allow us to use navigation button

  const goToHonme = () => {
    navigation.navigate('Home'); // this code will navigate us to Home Screen
  }
  return (
    // Container of Whole Geometry User Interface
    <ScrollView contentContainerStyle={styles.container}>
      {/* Rectangle and Banner Wrapper */}
      <View style={styles.imageWrapper}>
              {/* Wide Rectangle on Top*/}
          <View style={styles.topRectangle} />
              {/* Topic Banner */}
        <Image 
            source={require('../assets/images/topic-banner/geometry.png')}
            style={styles.topicImage}
        />
      </View>
          {/* Lessons: and Custom Arrow Down ( ↓ ) */}
      <View style={styles.lessonContainer}>
        <Text style={styles.lessonsText}>Lessons:</Text>
        <TouchableOpacity onPress={goToHonme}>
                  <Image
                  source={require('../assets/images/arrow/arrowdown.png')}
                  style={styles.arrowDown}
                />
        </TouchableOpacity>
      </View>
              {/* Title and Depscription Container for Geometry */}
      <View style={styles.definitionContainer}>
        <Text style={styles.Title}>Geometry</Text>
        <Text style={styles.depscription}>
          is the branch of matheamtics that deals with shapes, 
          angles, dimensions and sizes of a variety of things 
          we see in everyday life. 'Geo' means 'Earth' and 
          'metron' means 'measurement'.
        </Text>
      </View>

            {/* Topic 1 Angles */}
      <View style={styles.lessonTitleContainer}>
        <Text style={styles.lessonTitle}>I. Angles</Text>
      </View>


      {/* Title and Depscription Container for Angles */}
      <Text style={styles.LeftTitle}>Definition</Text>
      <Text style={styles.depscription}>
          An angle is formed when two straight lines or rays 
          meet at a common endpoint. The common point of 
          contact is called the vertex of an angle. 
          The word angle comes from a Latin word 
          named 'angulus,' meaning "corner."
        </Text>

        {/* Grid for angle types */}
        <View style={styles.gridContainer}>
            {/* Row 1 */}
            <View style={styles.row}>
                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/acute_angle.jpg')} style={styles.angleImage}/>
                </View>

                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/right_angle.jpg')} style={styles.angleImage}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/full_rotation.jpg')} style={styles.angleImage}/>
                </View>

                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/straight_angle.jpg')} style={styles.angleImage}/>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/obtuse_angle.jpg')} style={styles.angleImage}/>
                </View>

                <View style={styles.angleBox}>
                    <Image source={require('../assets/images/angle-type/reflex_angle.jpg')} style={styles.angleImage}/>
                </View>
            </View>
        </View>
      {/* Wide rectangle at the bottom */}
    <View style={styles.bottomRectangle} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  // Container of Whole UI  
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 20,
  },
  
  // Responsible for Manipulating the position of the Image ( Geometry )
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 100,
  },

  // Bluish Green Rectangle on Top
  topRectangle: {
    position: 'absolute',
    top: -20,
    width: '100%',
    height: 20,
    backgroundColor: colors.lighter,
    zIndex: 1,
  },
  
  // Topic Banner ( Geometry )  
  topicImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'relative',
  },

  // Container of both " Lessons: " and Arrow Down ( ↓ )
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lighter,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 10,
  },

  // The word itself " lessons: "
  lessonsText: {
    fontSize: 30,
    fontFamily: 'Protest-Riot',
    color: colors.white,
    paddingLeft: 20,
  },

  // ( ↓ ) Arrow down in the right side of the text " Lessons: "
  arrowDown: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
  // Responsible for alignment of the whole container of "Geometry" and its descriptions
  definitionContainer: {
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },

  // "Geometry" text in the center
  Title: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: -20,
  },

  // Depscription of the "Geometry" and [TEXT] "Definition"
  depscription: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.lighter,
    lineHeight: 22,
    paddingLeft: 37,
  },

  // I. Angles Container
  lessonTitleContainer: {
    backgroundColor: colors.lighter,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },

  // This section is for the text " I. Angles "  [ TEXT ]  
  lessonTitle: {
    fontSize: 30,
    fontFamily: 'Protest-Riot',
    color: colors.white,  
    textAlign: 'center',
  },

  // "Definition" text
  LeftTitle: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginBottom: 10,
    textAlign: 'left',
    width: '90%',
  },

  // Container only for different type of Angles
  gridContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  // For every row (2) items every row
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
   // Shadow for all Angle Images
   angleBox: {
    width: 140,
    height: 140,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    padding: 10,
  }, 
  // Image of all Angles
  angleImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  // Bluish Green Rectangle on Bottom
  bottomRectangle: {
    width: '100%',
    height: 30,
    backgroundColor: colors.lighter,
    marginTop: 30,
    marginBottom: -20,
    },

});

export default Geometry;

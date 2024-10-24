import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/colors';

const Algebra = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  }
  return (
    // Container of Whole Algebra User Interface
    <ScrollView contentContainerStyle={styles.container}>
      {/* Rectangle and Image Wrapper */}
      <View style={styles.imageWrapper}>
              {/* Wide Rectangle on Top*/}
          <View style={styles.topRectangle} />
              {/* Topic Banner */}
            <Image 
                source={require('../assets/images/topic-banner/algebra.png')}
                style={styles.topicImage}
            />
          </View>
          {/* Lessons: and Custom Arrow Down ( ↓ ) */}
        <View style={styles.lessonContainer}>
          <Text style={styles.lessonsText}>Lessons:</Text>
            <TouchableOpacity onPress={goToHome}>
            <Image
              source={require('../assets/images/arrow/arrowdown.png')}
              style={styles.arrowDown}
            />
            </TouchableOpacity>
        </View>
              {/* Title and Depscription Container for Algebra */}
            <View style={styles.definitionContainer}>
              <Text style={styles.Title}>Algebra</Text>
              <Text style={styles.depscription}>
                  is a branch of mathematics in which arithmetic
                  operations and other formal manipulations are
                  applied to abstract symbols rather than specific number.
              </Text>
            </View>
            {/* Topic 1 Equations */}
            <View style={styles.lessonTitleContainer}>
              <Text style={styles.lessonTitle}>I. Equations</Text>
            </View>
              {/* Title and Depscription Container for Algebra */}
            <Text style={styles.LeftTitle}>Definition</Text>
              <Text style={styles.depscription}>
                  An equation expresses the quality 
                  of two expressions through the 
                  equals sign (=).
              </Text>
              <View style={styles.tableImageWrapper}>
                  <Image
                    source={require('../assets/images/equations-inequalities/inequalities.png')}
                    style={styles.tableImage}
                  />
                  </View>
            {/* Topic 2 Inequalities */}
                <View style={styles.lessonTitleContainer}>
                  <Text style={styles.lessonTitle}>II. Inequalities</Text>
                </View>
              {/* Title and Depscription Container for II. Inequalities */}
                <Text style={styles.LeftTitle}>Definition</Text>
                <Text style={styles.depscription}>
                    Inequalities are mathematical statements 
                    that rather possess a greater than (&gt;),
                    greater than or equal to (&ge;), less than 
                    (&lt;), or less than or equal to
                    (&le;), between expressions in place of 
                    the equal sign in equations.
                </Text>
                <View style={styles.tableImageWrapper}>
                  <Image
                    source={require('../assets/images/equations-inequalities/inequalities.png')}
                    style={styles.tableImage}
                  />
                  </View>
                    {/* Wide rectangle at the bottom */}
                    <View style={styles.bottomRectangle} />
    </ScrollView>
  )
};

const styles = StyleSheet.create({

  // Container of Whole UI
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 20,
  },

  // Responsible for Manipulating the position of the Image ( Algebra )
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

  // Topic Banner ( Algebra )
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

  // I. Equations & Inequalities Container
  lessonTitleContainer: {
    backgroundColor: colors.lighter,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },

  // includes I. Equations & II. Inequalities  [ TEXT ]  
  lessonTitle: {
    fontSize: 30,
    fontFamily: 'Protest-Riot',
    color: colors.white,
    textAlign: 'center',
  },

  // Responsible for alignment of the whole container of Algebra and its descriptions
  definitionContainer: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },

  // "Algebra" text in the center
  Title: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginBottom: 10,
    textAlign: 'center',
  },

  // Depscription below the Algebra and the [TEXT] "Definition"
  depscription: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.lighter,
    lineHeight: 22,
    paddingLeft: 20,
  },
  
  // "Definition" text
  LeftTitle: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginTop: 10,
    marginBottom: 12,
    textAlign: 'left',
    width: '90%',
  },
  
  tableImageWrapper: {
    width: '78%',
    height: 200,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    // Shadow properties for Android
    elevation: 5,
    backgroundColor: colors.white, // Required for the shadow to show on Android
  },

  // Image properties (border radius is now in the wrapper)
  tableImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 15, // Ensures border radius is applied to the image as well
  },
  // Bluish Green Rectangle on Bottom
  bottomRectangle: {
    width: '100%',
    height: 30,
    backgroundColor: colors.lighter,
    marginTop: 30,
    marginBottom: -20,
  },
})

export default Algebra;
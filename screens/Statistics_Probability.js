import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // nag import ako ng navigation dito
import colors from '../components/colors';

const Statistics_Probability = () => {

  const navigation = useNavigation(); // this code will allow us to use navigation button

  const goToHonme = () => {
    navigation.navigate('Home'); // this code will navigate us to Home Screen
  }
  return (
    // Container of Whole Statistics and Probability User Interface
    <ScrollView contentContainerStyle={styles.container}>
      {/* Rectangle and Image Wrapper */}
      <View style={styles.imageWrapper}>
              {/* Wide Rectangle on Top*/}
                <View style={styles.topRectangle} />
              {/* Topic Banner */}
        <Image
          source={require('../assets/images/topic-banner/statistics_probability.png')}
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

      {/* Lesson Title with background */}
      <View style={styles.lessonTitleContainer}>
        <Text style={styles.lessonTitle}>I. Statistics</Text>
      </View>

      {/* Definition Section */}
      <View style={styles.definitionContainer}>
        <Text style={styles.Title}>Definition</Text>
        <Text style={styles.description}>
          Statistics concerns the analysis and 
          interpretation of data which has been collected.
        </Text>
      </View>

      {/* Bar Graph Section */}
      <Text style={styles.GraphTitle}>Bar Graph</Text>
      <View style={styles.graphImagerWrapper}>
        <Image
          source={require('../assets/images/graph-type/bar-graph.jpg')}
          style={styles.graphImage}
        />
      </View>

      {/* Line Graph Section */}
      <Text style={styles.GraphTitle}>Line Graph</Text>
      <View style={styles.graphImagerWrapper}>
        <Image
          source={require('../assets/images/graph-type/line-graph.jpg')}
          style={styles.graphImage}
        />
      </View>

      {/* Pie Graph Section */}
      <Text style={styles.GraphTitle}>Pie Graph</Text>
      <View style={styles.graphImagerWrapper}>
        <Image
          source={require('../assets/images/graph-type/pie-graph.jpg')}
          style={styles.graphImage}
        />
      </View>

      {/* Lesson Title with background */}
      <View style={styles.lessonTitleContainer}>
        <Text style={styles.lessonTitle}>II. Probability</Text>
      </View>

      {/* Definition Section */}
      <View style={styles.definitionContainer}>
        <Text style={styles.Title}>Definition</Text>
        <Text style={styles.description}>
          Probability is the branch of matheamtics 
          that studies the likelihood of events occuring.
        </Text>
      </View>
      {/* Additional Definition Section */}
      <Text style={styles.description}>
          For example, if you throw a die, then the 
          probability of getting 1 is 1/6. Similarly, 
          the probability of getting all the numbers 
          from 2,3,4,5 and 6, one at a time is 1/6. 
          Hence, the following are ome examples of 
          equally likely events when throwing a die: 
          Getting 3 and 5 on throwing a die.
        </Text>
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
  
  // Responsible for Manipulating the position of the Image ( Statistics and Probability )
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
  
  // Topic Banner ( Statistics and Probability )  
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
    marginBottom: 15,
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

  // I. Statistics & II. Probability Container
  lessonTitleContainer: {
    backgroundColor: colors.lighter,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },

  // includes I. Equations & II. Inequalities [ TEXT ]  
  lessonTitle: {
    fontSize: 30,
    fontFamily: 'Protest-Riot',
    color: colors.white,  
    textAlign: 'center',
  },
  // Responsible for alignment of the whole container of Definition [TEXT] and descriptions
  definitionContainer: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  // "Definition" [TEXT] at the left
  Title: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginBottom: 10,
    textAlign: 'left',
  },

  // Depscription below the [TEXT] "Definition"
  description: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.lighter,
    lineHeight: 22,
    paddingLeft: 20,
  },

  // Graph [TEXT] Titles
  GraphTitle: {
    fontSize: 23,
    fontFamily: 'Protest-Riot',
    color: colors.lighter,
    marginBottom: 25,
    textAlign: 'left',
    width: '90%',
  },
  // Graph Image Shadow and Border Radius Wrapper
  graphImagerWrapper: {
    width: 300,
    height: 250,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    elevation: 5,
    backgroundColor: colors.white,
    overflow: 'hidden',

  },

  // Graph Images
  graphImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
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

export default Statistics_Probability;

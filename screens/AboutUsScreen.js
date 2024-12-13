import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../components/colors';
import { Linking } from 'react-native';

// Information About The Members & Path to Images
// This is an array [1] with 5 objects with their perspective name, role, and images properties 
const teamMembers = [
  { name: "Shaina Jasmin A. Orpilla", role: "Project Manager", image: require('../assets/images/people/me.jpg') },
  { name: "John Michael G. Abanil", role: " Assurance Specialist, Release Manager, User Insight Specialist, Data Administrator, Substitute Back-end Developer", image: require('../assets/images/people/jm.jpg') },
  { name: "Janrow David F. Gallogo", role: "UI/UX Developer", image: require('../assets/images/people/janrow.jpg') },
  { name: "Ivan Fritz Clifford S. Alarva", role: "Front-end Developer", image: require('../assets/images/people/ivan.jpg') },
  { name: "Kristopher R. Macarubbo", role: "Backend-end Developer", image: require('../assets/images/people/kristopher2.jpg') },
  { name: "Karl Dave G. Acosta", role: "Finance", image: require('../assets/images/people/member.jpg') },
  { name: "Eron Arenas", role: "Finance", image: require('../assets/images/people/member.jpg') },
  { name: "Charles Kenjie Noronio", role: "Finance", image: require('../assets/images/people/member.jpg') },


];

// Logo for footer
const triangleImage = require('../assets/images/arrow/triangle.png');
const logo = require('../assets/images/logo/logo.png');
const facebookIcon = require('../assets/images/footer-icons/facebook.png');
const instagramIcon = require('../assets/images/footer-icons/instagram.png');
const emailIcon = require('../assets/images/footer-icons/email.png');
const twitterIcon = require('../assets/images/footer-icons/twitter.png');
const githubIcon = require('../assets/images/footer-icons/github.png');

// open linking api
const openGitHub = () => {
  Linking.openURL('https://github.com/ferguzus/KaalamanPi');
}

const AboutUsScreen = () => {
  return (
    // Container of Whole About Us User Interface
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header for About Us */}
      <Text style={styles.headerText}>About Us</Text>

      {/* Paragraph Text */}
      {/* <Text style={styles.paragraph}>
        KaalamanPi is a platform that focuses on the integration of knowledge (kaalaman) 
        across various subjects, including math symbolized by "Pi."
      </Text> */}

      {/* Meet The Team Section */}
      <TouchableOpacity style={styles.meetTheTeamWrapper}>
        <View style={styles.meetTheTeamContainer}>
        <Text style={styles.meetTheTeamText}>Meet The Team</Text>
        </View>


      {/* [ ▽ ] Triangle Image or Arrow Down for Meet The Team Section */}
      <View style={styles.arrowDownContainer}>
        <Image source={triangleImage} style={styles.arrowDownImage}/>
      </View>
      </TouchableOpacity>

      {/* Team Members Section */}
      <View style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <View
            key={index}
            style={[
              styles.card,
              member.name === "Kristopher R. Macarubbo" && styles.kristopherCard,
              (index === teamMembers.length - 1 && teamMembers.length % 2 !== 0) && styles.centerLastCard
            ]}
            >
              {/* Image with Shadow effect in View */}
              <View style={styles.shadowWrapper}>
                <View style={styles.imageContainer}>
                  <Image source={member.image} style={styles.profileImage} />
                </View>
              </View>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
          </View>
        ))}
      </View>

      {/* Section Divider or Horizontal Line After The Last Team Member */}
      <View style={styles.sectionDivider} />

      {/* Paragraph Section */}
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalInfoText}>
        We use the ESP32 to monitor room temperature and humidity, and control lights. 
        The React Native app allows users to log in and view the temperature, humidity,
         and control the lights,.
        </Text>
      </View>

      {/* Specialities Section */}
      <TouchableOpacity style={styles.SpecialitiesWrapper}>
        <View style={styles.SpecialitiesContainer}>
        <Text style={styles.SpecialitiesText}>Members' Specialties</Text>
        </View>


      {/* [ ▽ ] Triangle Image or Arrow Down for Implementation of Members' Specialities in Figma Design Section */}
      <View style={styles.arrowDown}>
        <Image source={triangleImage} style={styles.arrowDownPhoto} />
      </View>
      </TouchableOpacity>

      {/* ORPILLA - UI Design Principles & UX Design Laws  */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>I.  Project Manager:</Text>
        <Text style={styles.bulletText}>
        • Orpilla is responsible for planning,
        </Text>
        <Text style={styles.subSectionText}>
        organizing, and managing the project from 
        start to finish in order to achieve a predefined 
        goal or outcome.
        </Text>
      </View>

      {/* GALLOGO - User Persona Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>II. UI/UX Developer:</Text>
        <Text style={styles.bulletText}>
        • Gallogo perform tasks like wireframing, 
        </Text>
        <Text style={styles.subSectionText}>
        prototyping, and creating visually compelling designs. 
        He make sure that the user interface is not only visually 
        appealing but also intuitive and user-friendly.
        </Text>
      </View>

      {/* ABANIL - Color Theory & 60-30-0 Rule Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>III. Assurance Specialist:</Text>
        <Text style={styles.bulletText}>
        • Abanil performs application testing to 
        </Text>
        <Text style={styles.subSectionText}>
        assess the quality, functionality, and performance of the app,
         with auditing for security vulnerabilities. 
         They perform both manual and automated testing, 
         ensure secure coding practices, and work towards 
         maintaining the app according to data protection 
         and cybersecurity standards.
        </Text>
      </View>

      {/* ALARVA - Spacing Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>IV. Front-end Developer:</Text>
        <Text style={styles.bulletText}>
        • Alarva integrates the UI/UX design into 
        </Text>
        <Text style={styles.subSectionText}>
        the front end of the app using React 
        Native to provide a responsive and 
        interactive user interface.
        content.
        </Text>
      </View>

      {/* MACARUBBO - Typography Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>V. Back-end Developer:</Text>
        <Text style={styles.bulletText}>
        • Macarubbo assigned to build and 
        </Text>
        <Text style={styles.subSectionText}>
        maintain the server-side logic, databases, 
        and other components of a mobile application.
        He work behind the scenes to ensure that the
        application runs smoothly and efficiently.
        </Text>
      </View>

        {/* MACARUBBO - Typography Section */}
            <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>VI. Release Manager:</Text>
        <Text style={styles.bulletText}>
        • Abanil is responsible for merging front-
        </Text>
        <Text style={styles.subSectionText}>
        end and back-end codebases and overseeing version control. 
        To guarantee stable deployments and a predictable development 
        workflow, they keep the team informed about versioning and the 
        release timetable. 
        </Text>
      </View>

        {/* MACARUBBO - Typography Section */}
              <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>VII. User Insight Specialist:</Text>
        <Text style={styles.bulletText}>
        • Abanil ensure that mobile application 
        </Text>
        <Text style={styles.subSectionText}>
        feature developments align with user expectations, 
        combines content strategy and consumer studies. 
        He create in-app content that improves the app's 
        usability and aligns it with user needs by analyzing 
        market trends and user input.
        </Text>
      </View>

        {/* MACARUBBO - Typography Section */}
              <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>VIII. Data Administrator:</Text>
        <Text style={styles.bulletText}>
        • Abanil is in charge of overall database 
        </Text>
        <Text style={styles.subSectionText}>
        security, performance, and architecture. 
        focuses on efficiency and dependability while 
        optimizing data retrieval and storage to ensure
         data access and integrity.
        </Text>
      </View>


      {/* Footer Section */}
      <View style={styles.footerContainer}>
        {/* Horizontal Lines Container */}
        <View style={styles.lineContainer}>
                  {/* left << Horizontal Line */}
            <View style={styles.horizontalLine} />
            {/* Footer Icons */}
            
              <View style={styles.iconContainer}>
                  {/* Icons with Touch Opacity Event */}
                  <TouchableOpacity>
                      <Image source={facebookIcon} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Image source={instagramIcon} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Image source={emailIcon} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Image source={twitterIcon} style={styles.socialIcon} />
                  </TouchableOpacity>
                  {/* Go to github repository */}
                  <TouchableOpacity onPress={openGitHub}>
                      <Image source={githubIcon} style={styles.socialIcon} />
                  </TouchableOpacity>

              </View>
                  {/* Right >> Horizontal Line */}
            <View style={styles.horizontalLine} />  
        </View>

        {/* Logo and Text */}
        <View style={styles.logoTextContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>SenseLink</Text>
        </View>

        {/* Copyright Text */}
        <Text style={styles.footertext}>
            Copyright © 2024 SenseLink
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    backgroundColor: colors.lighter,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },

  // About Us
  headerText: {
    fontSize: 36,
    fontFamily: 'Protest-Riot',
    color: colors.white,
    marginBottom: 10,
  },

  // Kaalaman is a platform that focuses ...
  paragraph: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.white,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  meetTheTeamWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  // Meet The Team Rectangle
  meetTheTeamContainer: {
    width: '120%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },

  // Meet The Team
  meetTheTeamText: {
    fontSize: 18,
    fontFamily: 'Protest-Riot',
    color: colors.black,
    paddingBottom: 5,
  },

  // Arrow down below the Rectangle
  arrowDownContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },

  // Arrow Custom Image
  arrowDownImage: {
    width: 20,
    height: 20,
  },

  // Team Container
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },

  // Cards
  card: {
    width: '45%',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 90,
    elevation: 12, // guys ganito lang shadow sa react native [Android]
  },

  // Custom Card Margin 
  kristopherCard: {
    marginBottom: 90,
  },

  // Profile Picture Container
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Profile Picture
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  // Profile Picture Shadow
  shadowWrapper: {
    position: 'absolute',
    top: -30,
    borderRadius: 50,
    elevation: 10, // Shadow
  },

  // Member Name
  memberName: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 45,
    color: colors.darker,
    paddingTop: 3,
  },

  // Member Role
  memberRole: {
    fontSize: 10,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.black,
    paddingTop: 5,
  },
  centerLastCard: {
    marginLeft: '28%'
  },

  //Horizontal Line
  sectionDivider: {
    width: '120%',
    height: 2,
    backgroundColor: colors.white,
    marginVertical: 20,
  },

  // Paragraph Container After The Horizontal Line
  additionalInfoContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },

  // Paragraph
  additionalInfoText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'left',
    color: colors.black,
    lineHeight: 22,
  },

  SpecialitiesWrapper: {
    alignItems: 'center',
    width: '100%',
  },

  // Rectangle Specialities Container
  SpecialitiesContainer: {
    width: '120%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    marginTop: 40,
  },

  // Specialities Text
  SpecialitiesText: {
    fontSize: 19,
    fontFamily: 'Protest-Riot',
    color: colors.black,
    textAlign: 'center',
    paddingBottom: 7,
  },

  // Arrow down below the Rectangle
  arrowDown: {
    alignItems: 'center',
    marginBottom: 20,
  },

  // Arrow Custom Image
  arrowDownPhoto: {
    width: 20,
    height: 20,
  },

  // Specialities Texts Container 
  sectionContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginVertical: 7,
  },

  // Titles Starts with Roman Numeral
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Protest-Riot',
    color: colors.black,
    marginBottom: 10,
  },

  // First Line Sentence with Bullet ( • )
  bulletText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.black,
    marginBottom: -3,
    paddingLeft: 10,
  },

  // Sentences after the First Line of Sentences with Bullet ( • )
  subSectionText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.black,
    marginBottom: -3,
    paddingLeft: 20,
  },

  // Section Item First Line
  sectionItemLine: {
    paddingLeft: 15,
  },

  // Section Item
  subSectionItem: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.black,
    marginBottom: -6,
    marginTop: 5,
    paddingLeft: 30,
  },

  // Section Text Margin
  sectionTextMargin: {
    marginTop: 20,
  },
  // Footer Section
  footerContainer: {
    marginTop: 40,
    paddingVertical: 20,
    backgroundColor: colors.lighter,
    width: '100%',
    alignItems: 'center',
  },

  // Icon Containers
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // Social Media Icons
  socialIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },

  // Container of Horizontal Line
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  // Horizontal Line Side by Side
  horizontalLine: {
    width: '15%',
    height: 2,
    backgroundColor: colors.white,
    marginHorizontal: 1,
  },

  // Container of Logo and Text
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  // Team Logo
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },

  // KaalamanPi
  logoText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    marginTop: 5,
  },

  // Copyright
  footertext: {
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    textAlign: 'center',
  }

})


export default AboutUsScreen;
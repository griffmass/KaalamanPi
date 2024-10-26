import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../components/colors';
import { Linking } from 'react-native';

// Information About The Members & Path to Images
// This is an array [1] with 5 objects with their perspective name, role, and images properties 
const teamMembers = [
  { name: "Shaina Jasmin A. Orpilla", role: "Figma Login Desginer (Login, About Us, Profile)", image: require('../assets/images/people/me.jpg') },
  { name: "John Michael G. Abanil", role: "Lead React Native Developer", image: require('../assets/images/people/jm.jpg') },
  { name: "Janrow David F. Gallogo", role: "Figma Login Designer (Dashboard)", image: require('../assets/images/people/janrow.jpg') },
  { name: "Ivan Fritz Clifford S. Alarva", role: "React Native Developer", image: require('../assets/images/people/ivan.jpg') },
  { name: "Kristopher R. Macarubbo", role: "React Native Developer", image: require('../assets/images/people/kristopher2.jpg') },
];

// Logo for footer
const triangleImage = require('../assets/images/arrow/triangle.png');
const logo = require('../assets/images/logo/kaalamanpi-vector.png');
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
      <Text style={styles.paragraph}>
        KaalamanPi is a platform that focuses on the integration of knowledge (kaalaman) 
        across various subjects, including math symbolized by "Pi."
      </Text>

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
          The math theme for the project
          emphasizes clean, structured, and
          logical design elements,
          reflecting with mathematics. The design
          aims to present information in
          a clear, balanced, and visually
          appealing way, ensuring an
          intuitive user experience.
          Each member contributes their
          specialized knowledge to the
          Figma design process, ensuring a
          cohesive and well-rounded final
          product:
        </Text>
      </View>

      {/* Specialities Section */}
      <TouchableOpacity style={styles.SpecialitiesWrapper}>
        <View style={styles.SpecialitiesContainer}>
        <Text style={styles.SpecialitiesText}>Implementation of Members' Specialities in Figma Design</Text>
        </View>


      {/* [ ▽ ] Triangle Image or Arrow Down for Implementation of Members' Specialities in Figma Design Section */}
      <View style={styles.arrowDown}>
        <Image source={triangleImage} style={styles.arrowDownPhoto} />
      </View>
      </TouchableOpacity>

      {/* ORPILLA - UI Design Principles & UX Design Laws  */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>I. UI Design Principles & UX Design Laws:</Text>
        <Text style={styles.bulletText}>
        • Orpilla ensures that the user
        </Text>
        <Text style={styles.subSectionText}>
        interface (UI) follows best practices
        by adhering to principles like
        consistency, hierarchy, and
        simplicity. By applying UX design
        laws (e.g., Fitts' Law, Hick's Law),
        they create an intuitive, efficient
        experience, making it easy for users
        to navigate through math-related
        content.
        </Text>
      </View>

      {/* GALLOGO - User Persona Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>II. User Persona:</Text>
        <Text style={styles.bulletText}>
        • Gallogo crafts detailed user
        </Text>
        <Text style={styles.subSectionText}>
        personas, representing the target
        audience for the math-themed
        design. This helps in tailoring the
        design to meet users' specific
        needs, such as clarity for students
        or professionals working with
        mathematical data.
        </Text>
      </View>

      {/* ABANIL - Color Theory & 60-30-0 Rule Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>III. Color Theory & 60-30-10 Rule:</Text>
        <Text style={styles.bulletText}>
        • Abanil utilizes color theory and the
        </Text>
        <Text style={styles.subSectionText}>
        Abanil utilizes color theory and 
        the 60-30-10 rule to ensure visual harmony. 
        By assigning 60% to a dominant color 
        (Light Gray-Beige), 30% to a secondary color 
        (Bluish Green), and 10% to an accent color 
        (Vibrant Orange Yellow) & (Medium Gray), 
        they enhance the design’s visual appeal and 
        readability, crucial for retaining user 
        focus on math content.
        </Text>
      </View>

      {/* ALARVA - Spacing Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>IV. Spacing:</Text>
        <Text style={styles.bulletText}>
        • Alarva manages the spacing
        </Text>
        <Text style={styles.subSectionText}>
        between elements, ensuring
        the layout feels balanced and
        uncluttered. Proper spacing
        improves readability and helps
        users easily process mathematical
        information by visually separating
        content.
        </Text>
      </View>

      {/* MACARUBBO - Typography Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>V. Typography:</Text>
        <Text style={styles.bulletText}>
        • Macarubbo has chosen a mix of
        </Text>
        <Text style={styles.subSectionText}>
          Protest Riot, and Poppins fonts for the math-themed Figma design:
        </Text>

        {/* Protest-Riot */}
        <Text style={[styles.subSectionItem,styles.sectionItemLine]}>a. Protest Riot: Adds elegance and</Text>
        <Text style={styles.subSectionItem}>
         draws attention to key sections. Perfect for 
         highlighting major sections and drawing 
         attention to important contents.
        </Text>

        {/* Poppins */}
        <Text style={[styles.subSectionItem,styles.sectionItemLine]}>b. Poppins: Clean, modern sans-serif</Text>
        <Text style={styles.subSectionItem}>
              for body text, ensuring readability throughout the design.
        </Text>

        <Text style={[styles.bulletText,styles.sectionTextMargin]}>
            • This combination creates a
        </Text>
        <Text style={styles.subSectionText}>
              balanced, readable, and visually appealing layout.
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
          <Text style={styles.logoText}>KaalamanPi</Text>
        </View>

        {/* Copyright Text */}
        <Text style={styles.footertext}>
            Copyright © 2024 KaalamanPi
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
    marginBottom: 15,
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
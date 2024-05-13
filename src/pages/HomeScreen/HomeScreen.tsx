import React, {FC} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import QuestionList from '../../components/apiComponents/QuestionList/QuestionList';
import CategoryList from '../../components/apiComponents/CategoryList/CategoryList';
import {styles} from './HomeScreen.styles';

const backgroundImage = require('../../assets/images/homeScreenImages/homeScreenBG.png');
const mailIcon = require('../../assets/images/homeScreenImages/mailIcon.png');

const HomeScreen: FC = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}>
          <Text style={styles.heading}>
            Hi, plant lover!{' '}
            <Text style={{fontWeight: '700'}}> {'\n'}Good Afternoon! ⛅</Text>
          </Text>
          <View style={styles.header}>
            <Text style={styles.searchBar}>Search for plants</Text>
          </View>
        </ImageBackground>

        <View style={styles.centeredContent}>
          <Image source={mailIcon} style={styles.buttonImage} />
          <View style={styles.textContent}>
            <Text style={styles.text}>FREE Premium Available</Text>
            <Text style={styles.text}>Tap to upgrade your account!</Text>
          </View>
        </View>

        <View style={styles.menuItems}>
          <Text style={styles.categoryHeading}>Get Started</Text>
          <QuestionList />
          <CategoryList />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton';
import {styles} from './Onboarding1Screen.styles';

type RootStackParamList = {
  Onboarding2: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding2'>;
};

const Onboarding1Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/firstOnboardingImages/firstOnBoardingBG.png')}
        style={styles.background}>
        <Text style={styles.heading}>
          Take a photo to <Text style={{fontWeight: '900'}}>identify</Text>{' '}
          {'\n'} the plant!
          {/*
          Line image below the "identify text"
          <Image
            source={require('../../assets/images/firstOnboardingImages/firstOnBoardingTextLine.jpg')}
            style={styles.image}
          /> */}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/firstOnboardingImages/firstOnBoardingBanner.png')}
            style={styles.image}
          />
        </View>
        <NavigationButton
          title="Continue"
          navigation={navigation}
          navigateTo="Onboarding2"
        />
      </ImageBackground>
    </View>
  );
};

export default Onboarding1Screen;

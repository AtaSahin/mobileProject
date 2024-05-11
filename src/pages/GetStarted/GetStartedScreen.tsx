import React from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton';
import {styles} from './GetStartedScreen.styles';

type RootStackParamList = {
  Onboarding1: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding1'>;
};

const GetStartedScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/landingPageImages/landingBg.jpg')}
        style={styles.background}
      />
      <Text style={styles.heading}>
        Welcome to <Text style={{fontWeight: '700'}}>PlantApp</Text>
      </Text>

      <Text style={styles.description}>
        Identify more than 3000+ plants and {'\n'} 88% accuracy.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/landingPageImages/landingBanner.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <NavigationButton
        title="Get Started"
        navigation={navigation}
        navigateTo="Onboarding1"
      />
    </View>
  );
};

export default GetStartedScreen;

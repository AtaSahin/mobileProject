import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton';
import {styles} from './Onboarding2Screen.styles';

type RootStackParamList = {
  Paywall: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Paywall'>;
};

const Onboarding2Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/secondOnboardingImages/secondOnboardingBG.png')}
        style={styles.background}>
        <Text style={styles.heading}>
          Get plant <Text style={{fontWeight: '900'}}>care guides</Text> {'\n'}{' '}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/secondOnboardingImages/secondOnboardingBanner.png')}
            style={styles.image}
          />
        </View>
        <NavigationButton
          title="Continue"
          navigation={navigation}
          navigateTo="Paywall"
        />
      </ImageBackground>
    </View>
  );
};

export default Onboarding2Screen;

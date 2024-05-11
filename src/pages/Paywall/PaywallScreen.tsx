import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton';
import {styles} from './PaywallScreen.styles';
import Box from '../../components/Box';
import RadioButton from '../../components/RadioButton';

type RootStackParamList = {
  HomePage: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
};

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/images/paywallScreenImages/paywallBanner.png')}
          style={styles.image}>
          <Text style={styles.heading}>
            <Text style={{fontWeight: '900'}}>PlantApp </Text>
            Premium
          </Text>
          <Text style={styles.description}>Access All Features</Text>
        </ImageBackground>

        <View style={styles.boxContainer}>
          <Box
            imageSource={require('../../assets/images/paywallScreenImages/paywallIcon1.png')}
            heading="Unlimited"
            subheading="Plant Identify"
          />
          <Box
            imageSource={require('../../assets/images/paywallScreenImages/paywallIcon2.png')}
            heading="Faster"
            subheading="Process"
          />
          <Box
            imageSource={require('../../assets/images/paywallScreenImages/paywallIcon1.png')}
            heading="Detailed"
            subheading="Plant care"
          />
        </View>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton
          label="1 Month"
          heading="1 Month"
          subheading="$2.99/month, auto renewable"
          selected={selectedDuration === '1 Month'}
          onPress={() => setSelectedDuration('1 Month')}
        />
        <RadioButton
          label="1 Year"
          heading="1 Year"
          subheading="First 3 days free, then $529,99/year"
          selected={selectedDuration === '1 Year'}
          onPress={() => setSelectedDuration('1 Year')}
        />
      </View>

      <NavigationButton
        title="Try free for 3 days"
        navigation={navigation}
        navigateTo="HomePage"
      />
    </View>
  );
};

export default PaywallScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
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
const data = [
  {
    key: '1',
    imageSource: require('../../assets/images/paywallScreenImages/paywallIcon1.png'),
    heading: 'Unlimited',
    subheading: 'Plant Identify',
  },
  {
    key: '2',
    imageSource: require('../../assets/images/paywallScreenImages/paywallIcon2.png'),
    heading: 'Faster',
    subheading: 'Process',
  },
  {
    key: '3',
    imageSource: require('../../assets/images/paywallScreenImages/paywallIcon1.png'),
    heading: 'Detailed',
    subheading: 'Plant care',
  },
];

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/images/paywallScreenImages/paywallBanner.png')}
          style={styles.image}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomePage')}
            style={styles.closeIcon}>
            <Image
              source={require('../../assets/images/paywallScreenImages/closeButton.png')}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>
            <Text style={{fontWeight: '900'}}>PlantApp </Text>
            Premium
          </Text>
          <Text style={styles.description}>Access All Features</Text>
        </ImageBackground>

        <View style={styles.boxContainer}>
          <FlatList
            horizontal
            data={data}
            renderItem={({item}) => (
              <Box
                imageSource={item.imageSource}
                heading={item.heading}
                subheading={item.subheading}
              />
            )}
            keyExtractor={item => item.key}
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

      <View style={styles.buttonContainer}>
        <NavigationButton
          title="Try free for 3 days"
          navigation={navigation}
          navigateTo="HomePage"
        />
      </View>
    </View>
  );
};

export default PaywallScreen;

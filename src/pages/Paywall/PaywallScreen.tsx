import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton';
import {styles} from './PaywallScreen.styles';

type RootStackParamList = {
  HomePage: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
};

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={{fontWeight: '900'}}>PlantApp</Text> Premium
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/paywallScreenImages/paywallBanner.png')}
          style={styles.image}
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

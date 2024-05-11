import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../components/NavigationButton';
type RootStackParamList = {
  Paywall: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Paywall'>;
};

const Onboarding2Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Onboarding 2</Text>
      <NavigationButton
        title="Continue"
        navigation={navigation}
        navigateTo="Paywall"
      />
    </View>
  );
};

export default Onboarding2Screen;

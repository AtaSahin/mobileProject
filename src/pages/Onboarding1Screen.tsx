import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../components/NavigationButton';

type RootStackParamList = {
  Onboarding2: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding2'>;
};

const Onboarding1Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Onboarding 1</Text>
      <NavigationButton
        title="Continue"
        navigation={navigation}
        navigateTo="Onboarding2"
      />
    </View>
  );
};

export default Onboarding1Screen;

import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../components/NavigationButton';

type RootStackParamList = {
  Onboarding1: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding1'>;
};

const GetStartedScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Get Started Screen</Text>
      <NavigationButton
        title="Get Started"
        navigation={navigation}
        navigateTo="Onboarding1"
      />
    </View>
  );
};

export default GetStartedScreen;

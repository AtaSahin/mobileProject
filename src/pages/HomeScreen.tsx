import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../components/NavigationButton';

type RootStackParamList = {
  GetStarted: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

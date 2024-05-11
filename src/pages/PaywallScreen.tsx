import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../components/NavigationButton';
type RootStackParamList = {
  HomePage: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
};

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Paywall screen</Text>
      <NavigationButton
        title="Try free for 3 days"
        navigation={navigation}
        navigateTo="HomePage"
      />
    </View>
  );
};

export default PaywallScreen;

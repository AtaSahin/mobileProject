import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import Onboarding1Screen from '../pages/Onboarding1/Onboarding1Screen';
import PaywallScreen from '../pages/Paywall/PaywallScreen';
import Onboarding2Screen from '../pages/Onboarding2/Onboarding2Screen';
import GetStartedScreen from '../pages/GetStarted/GetStartedScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={HomeScreen} />
      <Tab.Screen name="Test3" component={HomeScreen} />
      <Tab.Screen name="My Garden" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
      <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomePage" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

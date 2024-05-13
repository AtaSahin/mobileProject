import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import Onboarding1Screen from '../pages/Onboarding1/Onboarding1Screen';
import PaywallScreen from '../pages/Paywall/PaywallScreen';
import Onboarding2Screen from '../pages/Onboarding2/Onboarding2Screen';
import GetStartedScreen from '../pages/GetStarted/GetStartedScreen';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgba(40, 175, 110, 1)', // Aktif renk
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/homeScreenImages/homeIcon.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/homeScreenImages/diagnoseIcon.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/homeScreenImages/scanIcon.png')}
              style={{
                width: size * 2.5,
                height: size * 2.5,
                bottom: '50%',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Garden"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/homeScreenImages/myGardenIcon.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/homeScreenImages/profileIcon.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
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

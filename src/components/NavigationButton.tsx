import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

type ButtonProps = {
  title: string;
  navigation: NavigationProp<any>;
  navigateTo: string;
};

const NavigationButton: React.FC<ButtonProps> = ({
  title,
  navigation,
  navigateTo,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(navigateTo)}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height * 0.1,
    left: (width - width * 0.85) / 2,
    width: width * 0.85,
    height: height * 0.07,
    backgroundColor: '#28AF6E',
    borderRadius: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: height * 0.02,
    fontWeight: 'bold',
  },
});

export default NavigationButton;

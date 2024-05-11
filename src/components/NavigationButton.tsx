import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '10%',
    left: 24,
    width: '85%',
    height: 56,
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavigationButton;

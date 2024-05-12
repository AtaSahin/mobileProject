import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

type RadioButtonProps = {
  label: string;
  heading: string;
  subheading: string;
  selected: boolean;
  onPress: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  heading,
  subheading,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.radioButton, selected && styles.selectedButton]}
      onPress={onPress}>
      <View
        style={[styles.innerCircle, selected && styles.innerCircleSelected]}
      />

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.subheadingText}>{subheading}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: height * 0.075,
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.041,
    marginBottom: height * 0.02,
    borderRadius: height * 0.014,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'transparent',
  },
  selectedButton: {
    borderColor: 'rgba(40, 175, 110, 1)',
    backgroundColor: 'rgba(40, 175, 110, 0.168)',
  },
  innerCircle: {
    width: width * 0.05,
    height: height * 0.031,
    borderRadius: height * 0.025,
    borderWidth: 2,
    borderColor: '#FFF',
    marginRight: width * 0.025,
  },
  innerCircleSelected: {
    backgroundColor: 'rgba(40, 175, 110, 1)',
  },
  textContainer: {
    flex: 1,
  },
  headingText: {
    color: '#FFF',
    fontSize: height * 0.025,
    fontWeight: 'bold',
  },
  subheadingText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: height * 0.02,
  },
});

export default RadioButton;

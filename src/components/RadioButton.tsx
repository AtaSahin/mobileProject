import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
    width: '98%',
    height: 60,
    padding: 13,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'transparent',
  },
  selectedButton: {
    borderColor: 'rgba(40, 175, 110, 1)',
    backgroundColor: 'rgba(40, 175, 110, 0.168)',
  },
  innerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    marginRight: 10,
  },
  innerCircleSelected: {
    backgroundColor: 'rgba(40, 175, 110, 1)',
  },
  textContainer: {
    flex: 1,
  },
  headingText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subheadingText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
});

export default RadioButton;

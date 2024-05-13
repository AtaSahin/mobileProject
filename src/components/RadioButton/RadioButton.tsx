import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RadioButton.styles';
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
      testID="radioButton"
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

export default RadioButton;

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Box.styles';

type BoxProps = {
  imageSource: any;
  heading: string;
  subheading: string;
};

const Box: React.FC<BoxProps> = ({imageSource, heading, subheading}) => {
  return (
    <View style={styles.box}>
      <Image source={imageSource} style={styles.boxImage} testID="boxImage" />
      <View style={styles.textContainer}>
        <Text style={styles.boxHeading}>{heading}</Text>
        <Text style={styles.boxSubheading}>{subheading}</Text>
      </View>
    </View>
  );
};

export default Box;

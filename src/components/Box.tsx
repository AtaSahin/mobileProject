import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type BoxProps = {
  imageSource: any;
  heading: string;
  subheading: string;
};

const Box: React.FC<BoxProps> = ({imageSource, heading, subheading}) => {
  return (
    <View style={styles.box}>
      <Image source={imageSource} style={styles.boxImage} />
      <View style={styles.textContainer}>
        <Text style={styles.boxHeading}>{heading}</Text>
        <Text style={styles.boxSubheading}>{subheading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
    marginRight: '3%',
  },
  boxImage: {
    width: '25%',
    height: '25%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position: 'absolute',
    left: '5%',
    top: '10%',
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boxHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Rubik',
  },
  boxSubheading: {
    fontSize: 14,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});

export default Box;

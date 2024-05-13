import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 250, 250, 1);',
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: width * 0.06,
    fontWeight: '500',
    lineHeight: height * 0.06,
    color: '#13231B',
    bottom: height * 0,
    right: '18%',
  },
});

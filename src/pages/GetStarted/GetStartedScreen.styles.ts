import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    resizeMode: 'cover',
    width: '100%',
    height: ' 100%',
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 33.18,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: '#13231B',
    bottom: '8%',
  },
  description: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: 'rgba(19, 35, 27, 0.7)',
    bottom: '5%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    maxHeight: '70%',
    bottom: '5%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

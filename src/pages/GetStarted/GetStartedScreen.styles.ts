import {
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface Styles {
  container: ViewStyle;
  background: ViewStyle;
  heading: TextStyle;
  description: TextStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
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
    height: '100%',
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: width * 0.077,
    fontWeight: '400',
    lineHeight: height * 0.091,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: '#13231B',
    bottom: height * 0.04,
  },
  description: {
    fontFamily: 'Rubik',
    fontSize: width * 0.046,
    fontWeight: '400',
    lineHeight: height * 0.062,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: 'rgba(19, 35, 27, 0.7)',
    bottom: height * 0.05,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    maxHeight: height * 0.6,
    bottom: height * 0.05,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

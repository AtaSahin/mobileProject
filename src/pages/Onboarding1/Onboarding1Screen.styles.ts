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
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: width * 0.07,
    fontWeight: '600',
    lineHeight: height * 0.091,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: '#13231B',
    left: width * 0.08,
    paddingTop: height * 0.05,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '100%',
    marginBottom: height * 0.027,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

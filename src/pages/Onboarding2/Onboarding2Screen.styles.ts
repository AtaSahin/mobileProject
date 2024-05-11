import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 33.18,
    letterSpacing: 0.07,
    textAlign: 'left',
    color: '#13231B',
    left: '8%',
    paddingTop: '5%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '75%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

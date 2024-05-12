import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#101e17',
  },
  heading: {
    fontSize: height * 0.04,
    fontWeight: '300',
    color: '#FFF',
    marginTop: height * 0.033,
    letterSpacing: 0.07,
    top: height * 0.26,
    textAlign: 'left',
    left: width * 0.1,
    fontFamily: 'Rubik',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: height * 0.03,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7);',
    marginTop: height * 0.033,
    letterSpacing: 0.07,
    top: height * 0.22,
    textAlign: 'left',
    left: width * 0.1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: height * 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    top: height * 0.42,
    left: width * 0.025,
    width: width * 1,
    height: height * 1,
    paddingHorizontal: width * 0.05,
  },
  radioContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.1,
    width: '100%',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: height * 0.033,
    right: width * 0.05,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    top: height * 0.15,
    right: width * 0.5,
  },
});

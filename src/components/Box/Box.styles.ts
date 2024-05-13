import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: width * 0.35,
    height: height * 0.15,
    borderRadius: height * 0.014,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
    marginRight: width * 0.03,
  },
  boxImage: {
    width: '25%',
    height: '28%',
    position: 'absolute',
    top: '10%',
    left: '10%',
    resizeMode: 'cover',
    borderTopLeftRadius: height * 0.014,
    borderTopRightRadius: height * 0.014,
  },
  textContainer: {
    paddingHorizontal: width * 0.01,
    paddingTop: height * 0.07,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: '10%',
  },
  boxHeading: {
    fontSize: height * 0.02,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Rubik',
  },
  boxSubheading: {
    fontSize: height * 0.015,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});

export default styles;

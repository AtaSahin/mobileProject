import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height * 0.1,
    left: (width - width * 0.85) / 2,
    width: width * 0.85,
    height: height * 0.07,
    backgroundColor: '#28AF6E',
    borderRadius: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: height * 0.02,
    fontWeight: 'bold',
  },
});

export default styles;

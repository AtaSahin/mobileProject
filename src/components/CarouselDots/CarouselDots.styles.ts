import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const marginTop = height * 0.05;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: marginTop,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const marginHorizontal = windowWidth * 0.03;

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: marginHorizontal,
    width: windowWidth / 2 - 2 * marginHorizontal,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 5,
    color: 'rgba(19, 35, 27, 1)',
    fontWeight: '800',
  },
});

export default styles;

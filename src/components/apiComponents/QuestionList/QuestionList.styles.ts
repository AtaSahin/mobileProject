import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: '5%',
  },
  questionContainer: {
    marginRight: '1.5%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: '55%',

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    width: Dimensions.get('window').width * 0.65,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: '0%',
    left: '0%',

    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Rubik',
  },
});

export default styles;

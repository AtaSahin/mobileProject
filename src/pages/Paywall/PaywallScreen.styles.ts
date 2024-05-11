import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#101e17',
  },
  heading: {
    fontSize: 24,
    fontWeight: '300',
    color: '#FFF',
    marginTop: 20,
    letterSpacing: 0.07,
    top: '50%',
    textAlign: 'left',
    left: '5%',
    fontFamily: 'Rubik',
  },

  description: {
    fontSize: 20,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7);',
    marginTop: 20,
    letterSpacing: 0.07,
    top: '45%',
    textAlign: 'left',
    left: '5%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '60%',
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
    left: -5,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 2,
  },
  radioContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
    width: '100%',
    left: -5,
  },
});

import {
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface HomeScreenStyles {
  container: ViewStyle;
  heading: TextStyle;
  header: ViewStyle;
  categoryHeading: TextStyle;
  backgroundImage: ImageStyle;
  centeredContent: ViewStyle;
  buttonImage: ImageStyle;
  textContent: ViewStyle;
  text: TextStyle;
  searchBar: ViewStyle;
  menuItems: ViewStyle;
}

export const styles = StyleSheet.create<HomeScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 250, 250, 1)',
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: width * 0.06,
    fontWeight: '500',
    lineHeight: height * 0.06,
    color: '#13231B',
    left: '5%',
    zIndex: 2,
  },
  header: {
    backgroundColor: 'rgba(251, 250, 250, 1)',
    marginBottom: '15%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryHeading: {
    fontFamily: 'Rubik',
    fontSize: width * 0.04,
    fontWeight: '700',
    lineHeight: height * 0.06,
    color: '#13231B',
    left: '5%',
    zIndex: 2,
  },
  backgroundImage: {
    width: '100%',
    height: '20%',
  },
  centeredContent: {
    width: '85%',
    height: 80,
    borderRadius: 12,
    backgroundColor: 'rgba(36, 32, 26, 1)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
  buttonImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: 'rgba(255, 222, 156, 0.8)',
    textAlign: 'left',
  },
  searchBar: {
    width: Dimensions.get('window').width * 0.85,
    left: '5%',
    height: 40,
    padding: 10,
    borderRadius: 12,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    borderWidth: 0.2,
  },
  menuItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
  },
});

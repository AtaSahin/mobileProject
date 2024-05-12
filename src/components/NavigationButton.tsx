// NavigationButton.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux'; // Import useDispatch hook
import {changePage} from '../redux/actions/actions';

type ButtonProps = {
  title: string;
  navigation: NavigationProp<any>;
  navigateTo: string;
  onPress?: () => void; // Optional custom onPress handler
  useRedux?: boolean;
  pageNumber?: number; // Optional flag to enable Redux integration
};

const NavigationButton: React.FC<ButtonProps> = ({
  title,
  navigation,
  navigateTo,
  onPress,
  useRedux = false,
  pageNumber,
}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate(navigateTo);
      if (useRedux) {
        dispatch(changePage(1));
      }
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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

export default NavigationButton;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {changePage} from '../../redux/actions/actions';
import styles from './NavigationButton.styles';
type ButtonProps = {
  title: string;
  navigation: NavigationProp<any>;
  navigateTo: string;
  onPress?: () => void;
  useRedux?: boolean;
  pageNumber?: number;
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

export default NavigationButton;

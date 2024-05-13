import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, ImageBackground, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import {styles} from './Onboarding1Screen.styles';
import {changePage} from '../../redux/actions/actions';
import CarouselDots from '../../components/CarouselDots/CarouselDots';

type RootStackParamList = {
  Onboarding2: undefined;
};

interface DispatchProps {
  changePage: (pageNumber: number) => void;
}

type StateProps = {
  currentPage: number;
};

type OwnProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding2'>;
};

type Props = StateProps & DispatchProps & OwnProps;

const Onboarding1Screen: React.FC<Props> = ({
  currentPage,
  navigation,
  changePage,
}) => {
  useEffect(() => {}, [currentPage]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/firstOnboardingImages/firstOnBoardingBG.png')}
        style={styles.background}>
        <Text style={styles.heading}>
          Take a photo to <Text style={{fontWeight: '900'}}>identify</Text>{' '}
          {'\n'} the plant!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/firstOnboardingImages/firstOnBoardingBanner.png')}
            style={styles.image}
          />
        </View>
        <NavigationButton
          title="Continue"
          navigation={navigation}
          navigateTo="Onboarding2"
          useRedux={true}
          pageNumber={2}
        />
        <CarouselDots />
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state: {currentPage: number}): StateProps => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps: DispatchProps = {
  changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding1Screen);

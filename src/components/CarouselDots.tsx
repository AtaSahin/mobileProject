import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

type Props = {};
type RootState = {
  page: {
    currentPage: number;
  };
};

const {width, height} = Dimensions.get('window');

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

const CarouselDots: React.FC<Props> = () => {
  const currentPage: number = useSelector(
    (state: RootState) => state.page.currentPage,
  );
  const totalPages: number = 3;

  const dots: JSX.Element[] = [];
  for (let i = 1; i <= totalPages; i++) {
    dots.push(
      <View
        key={i}
        style={[styles.dot, i === currentPage && styles.activeDot]}
      />,
    );
  }

  return <View style={styles.dotsContainer}>{dots}</View>;
};

export default CarouselDots;

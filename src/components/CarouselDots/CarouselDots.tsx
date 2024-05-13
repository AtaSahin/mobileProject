import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './CarouselDots.styles';

type Props = {};
type RootState = {
  page: {
    currentPage: number;
  };
};

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

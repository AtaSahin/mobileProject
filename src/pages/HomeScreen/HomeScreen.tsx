// AnotherPage.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import QuestionList from '../../components/apiComponents/QuestionList';
import CategoryList from '../../components/apiComponents/CategoryList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <QuestionList />
      <CategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

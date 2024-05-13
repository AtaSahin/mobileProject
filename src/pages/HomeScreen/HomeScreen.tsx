import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QuestionList from '../../components/apiComponents/QuestionList';
import CategoryList from '../../components/apiComponents/CategoryList';
import {styles} from './HomeScreen.styles';
import SearchBar from '../../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hi, plant lover!
        <Text style={{fontWeight: '700'}}>{'\n'} Good Afternoon! ⛅</Text>
      </Text>
      <SearchBar />
      <QuestionList />
      <CategoryList />
    </View>
  );
};

export default HomeScreen;

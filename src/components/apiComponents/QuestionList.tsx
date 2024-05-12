// QuestionList.js
import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setQuestions} from '../../redux/actions/questionsSlice';

const QuestionList = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.list);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions',
      );
      const data = await response.json();
      dispatch(setQuestions(data));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <TouchableOpacity key={index} onPress={() => {}}>
          <View style={styles.questionContainer}>
            <Image source={{uri: question.image_uri}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{question.title}</Text>
              <Text style={styles.subtitle}>{question.subtitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default QuestionList;

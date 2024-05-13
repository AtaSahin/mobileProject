import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setQuestions} from '../../../redux/actions/questionsSlice';
import styles from './QuestionList.styles';

interface Question {
  id: number;
  title: string;
  image_uri: string;
}

const QuestionList: FC = () => {
  const dispatch = useDispatch();
  const questions: Question[] = useSelector(
    (state: RootState) => state.questions.list,
  );

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

  const renderItem = ({item}: {item: Question}) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.questionContainer}>
        <Image source={{uri: item.image_uri}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={questions}
      renderItem={renderItem}
      keyExtractor={(item: Question, index: number) => index.toString()}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default QuestionList;

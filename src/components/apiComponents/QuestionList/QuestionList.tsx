import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setQuestions} from '../../../redux/actions/questionsSlice';

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

  const renderItem = ({item}) => (
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
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    left: '5%',
  },
  questionContainer: {
    marginRight: '1.5%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: '55%',

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    width: Dimensions.get('window').width * 0.65,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: '0%',
    left: '0%',

    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Rubik',
  },
});

export default QuestionList;

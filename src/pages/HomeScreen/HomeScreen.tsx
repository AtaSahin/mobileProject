import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCategories,
  selectCategories,
} from '../../redux/actions/categoriesSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {data: categories, status, error} = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategoryItem = ({
    item,
  }: {
    item: {id: number; image: {url: string}; title: string};
  }) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image.url}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  );
};
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: windowWidth / 2 - 20,
    height: windowWidth / 2 - 20,

    marginBottom: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'right',
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;

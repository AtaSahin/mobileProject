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

const CategoryList = () => {
  const dispatch = useDispatch();
  const {data: categories, status, error} = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategoryItem = ({item}) => (
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
const marginHorizontal = windowWidth * 0.03;

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: marginHorizontal,
    width: windowWidth / 2 - 2 * marginHorizontal,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 5,
    color: 'rgba(19, 35, 27, 1)',
    fontWeight: '800',
  },
});

export default CategoryList;

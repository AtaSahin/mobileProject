import React, {FC, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCategories,
  selectCategories,
} from '../../../redux/actions/categoriesSlice';
import styles from './CategoryList.styles';

interface Category {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

const CategoryList: FC = () => {
  const dispatch = useDispatch();
  const {data: categories, status, error} = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategoryItem = ({item}: {item: Category}) => (
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

export default CategoryList;

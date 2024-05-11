import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchBar from '../../components/SearchBar';

type RootStackParamList = {
  GetStarted: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1}}>
      <SearchBar onChangeText={setSearchText} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Search Text: {searchText}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

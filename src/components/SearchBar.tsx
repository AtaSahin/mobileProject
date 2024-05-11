import React from 'react';
import {View, TextInput} from 'react-native';

type SearchBarProps = {
  onChangeText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({onChangeText}) => {
  return (
    <View>
      <TextInput
        placeholder="Search..."
        onChangeText={onChangeText}
        style={{borderWidth: 1, borderColor: 'gray', padding: 10}}
      />
    </View>
  );
};

export default SearchBar;

import React from 'react';
import {TextInput, View} from 'react-native';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '100%',
        left: '5%',
        right: '5%',
        height: '11%',
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderColor: 'rgba(60, 60, 67, 0.25)',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          fontSize: 16,
          color: '#333',
          fontFamily: 'Arial',
        }}
        placeholder="Search for plants"
        placeholderTextColor="rgba(175, 175, 175, 1)"
      />
    </View>
  );
};

export default SearchBar;

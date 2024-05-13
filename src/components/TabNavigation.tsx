import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

type TabNavigationProps = {
  activeTab: string;
  onChangeTab: (tab: string) => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onChangeTab,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => onChangeTab('test1')}>
        <Text style={{color: activeTab === 'test1' ? 'green' : 'black'}}>
          Test 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('2')}>
        <Text style={{color: activeTab === '2' ? 'green' : 'black'}}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('3')}>
        <Text style={{color: activeTab === '3' ? 'green' : 'black'}}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('4')}>
        <Text style={{color: activeTab === '4' ? 'green' : 'black'}}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('5')}>
        <Text
          style={{
            color: activeTab === '5' ? 'green' : 'black',
          }}>
          5
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigation;

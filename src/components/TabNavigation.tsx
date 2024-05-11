import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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
        <Text style={{color: activeTab === 'test1' ? 'blue' : 'black'}}>
          Test 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('2')}>
        <Text style={{color: activeTab === '2' ? 'blue' : 'black'}}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('3')}>
        <Text style={{color: activeTab === '3' ? 'blue' : 'black'}}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('4')}>
        <Text style={{color: activeTab === '4' ? 'blue' : 'black'}}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab('5')}>
        <Text style={{color: activeTab === '5' ? 'blue' : 'black'}}>5</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigation;

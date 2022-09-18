import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Routes} from '../../constants';
import {Button} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate(Routes.board)}>HomeScreen</Text>
      {Object.values(Routes).map(route => (
        <Button
          title={route}
          key={route}
          onPress={() => navigation.navigate(route)}
        />
      ))}
    </View>
  );
};

export default HomeScreen;

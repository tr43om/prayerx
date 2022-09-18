import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Routes} from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate(Routes.board)}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

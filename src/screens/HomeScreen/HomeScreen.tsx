import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const boards = ['TO DO', 'TO BE', 'TO CHILL'];
  return (
    <View>
      {boards.map(board => (
        <Button
          title={board}
          key={board}
          onPress={() => navigation.navigate('Board', {name: board})}
        />
      ))}
    </View>
  );
};

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export default HomeScreen;

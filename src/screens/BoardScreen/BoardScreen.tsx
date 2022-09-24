import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const BoardScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParams, 'Board'>>();
  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
};
type BoardScreenProps = NativeStackScreenProps<RootStackParams, 'Board'>;

export default BoardScreen;

import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';

const BoardScreen: React.FC<BoardScreenProps> = ({
  route: {
    params: {name},
  },
}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
type BoardScreenProps = NativeStackScreenProps<RootStackParams, 'Board'>;

export default BoardScreen;

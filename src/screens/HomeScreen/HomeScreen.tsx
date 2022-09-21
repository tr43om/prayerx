import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';

import {useEffect} from 'react';
import {useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {selectBoards} from '../../store';
import {requestGetBoards} from '../../store';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();
  const boards = useSelector(selectBoards);

  console.log(boards);

  useEffect(() => {
    dispatch(requestGetBoards());
  }, [dispatch]);

  return (
    <View>
      {boards.map(board => (
        <Button
          title={board.title}
          key={board.id}
          onPress={() => navigation.navigate('Board', {name: board.title})}
        />
      ))}
    </View>
  );
};

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export default HomeScreen;

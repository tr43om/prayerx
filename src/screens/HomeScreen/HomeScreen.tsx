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
import {BoardsList} from '../../components';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const boards = useSelector(selectBoards);

  console.log(boards);

  useEffect(() => {
    dispatch(requestGetBoards());
  }, [dispatch]);

  return (
    <View>
      <BoardsList boards={boards} />
    </View>
  );
};

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export default HomeScreen;

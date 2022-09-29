import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParams} from '../root-routes';

import {useAppDispatch, selectBoards, requestGetBoards} from '../../store';
import {useSelector} from 'react-redux';

import {BoardsList, CreateBoardModal} from '../../components';
import {RouteProp} from '@react-navigation/core';
import {Routes} from '../../types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const boards = useSelector(selectBoards);

  useEffect(() => {
    dispatch(requestGetBoards());
  }, [dispatch]);

  return (
    <View>
      {boards && <BoardsList boards={boards} />}
      {boards.length === 0 && <Text>no boards bro</Text>}
      <CreateBoardModal />
    </View>
  );
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParams,
    Routes.home,
    undefined
  >;
  route: RouteProp<RootStackParams, Routes.home>;
};

export default HomeScreen;

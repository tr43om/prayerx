import {View} from 'react-native';
import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParams} from '../root-routes';

import {useEffect} from 'react';
import {useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {selectBoards} from '../../store';
import {requestGetBoards} from '../../store';
import {BoardsList, CreateBoardModal} from '../../components';
import {RouteProp} from '@react-navigation/core';
import {Text} from 'react-native';
import {Routes} from '../../constants';

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

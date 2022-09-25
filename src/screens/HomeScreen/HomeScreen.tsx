import {View, ScrollView} from 'react-native';
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
import {BoardsList, CreateBoardModal} from '../../components';
import {RouteProp} from '@react-navigation/core';
import {Text} from 'react-native';

const HomeScreen = () => {
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
  navigation: NativeStackNavigationProp<RootStackParams, 'Home', undefined>;
  route: RouteProp<RootStackParams, 'Home'>;
};

export default HomeScreen;

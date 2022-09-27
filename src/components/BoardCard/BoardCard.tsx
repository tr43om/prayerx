import {Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../screens';
import {StyleSheet} from 'react-native';

import {theme} from '../../styles';

import {SwipeableContainer} from '../SwipeableContainer';
import {DeleteButton, EditButton} from '../buttons';
import {Swipeable} from 'react-native-gesture-handler';
import {Routes} from '../../constants';
import {requestDeleteBoard, useAppDispatch} from '../../store';

const BoardCard = ({title, id}: BoardCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();
  const swipeRef = useRef<Swipeable>(null);
  const rightActions = [
    <DeleteButton onDelete={() => dispatch(requestDeleteBoard(id))} />,
    <EditButton onEdit={() => swipeRef?.current?.close()} />,
  ];

  return (
    <SwipeableContainer rightActions={rightActions} swipeRef={swipeRef}>
      <TouchableOpacity
        style={[styles.container]}
        onPress={() =>
          navigation.navigate(Routes.board, {name: title, id: id})
        }>
        <Text style={styles.content}>{title}</Text>
      </TouchableOpacity>
    </SwipeableContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background,
    borderRadius: 4,
    padding: 20,
    color: theme.colors.text,
  },
  content: {
    fontWeight: '500',
  },
});

type BoardCardProps = {
  title: string;
  id: number;
};

export default BoardCard;

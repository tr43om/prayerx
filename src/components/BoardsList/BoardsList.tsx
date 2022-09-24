import {View, Text} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';
import {BoardsResponseDto} from '../../types';
import {BoardCard} from '../BoardCard';

const BoardsList = ({boards}: BoardsListProps) => {
  return (
    <View>
      <FlatList
        data={boards}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => <BoardCard title={item.title} />}
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
      />
    </View>
  );
};

type BoardsListProps = {
  boards: BoardsResponseDto[];
};
export default BoardsList;

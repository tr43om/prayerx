import React from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import {BoardsResponseDto} from '../../types';
import {BoardCard} from '../BoardCard';

const BoardsList = ({boards}: BoardsListProps) => {
  return (
    <View>
      <FlatList
        data={boards}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <BoardCard title={item.title} id={item.id} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

type BoardsListProps = {
  boards: BoardsResponseDto[];
};

const styles = StyleSheet.create({
  separator: {
    margin: 5,
  },
});
export default BoardsList;

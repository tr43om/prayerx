import {View, StyleSheet, ViewStyle} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';
import {PrayersResponseDto} from '../../types';
import {PrayerCard} from '../PrayerCard ';

const PrayersList = ({prayers, listStyles}: PrayersListProps) => {
  return (
    <View>
      <FlatList
        data={prayers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PrayerCard prayer={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={[styles.list, listStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },

  separator: {
    margin: 5,
  },
});

type PrayersListProps = {
  prayers: PrayersResponseDto[];
  listStyles?: ViewStyle;
};
export default PrayersList;

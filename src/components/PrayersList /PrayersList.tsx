import {View, Text} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';
import {PrayersResponseDto} from '../../types';
import {PrayerCard} from '../PrayerCard ';

const PrayersList = ({prayers}: PrayersListProps) => {
  return (
    <View>
      <FlatList
        data={prayers}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => <PrayerCard title={item.title} id={item.id} />}
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
      />
    </View>
  );
};

type PrayersListProps = {
  prayers: PrayersResponseDto[];
};
export default PrayersList;

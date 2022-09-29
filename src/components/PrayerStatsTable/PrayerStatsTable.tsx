import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {PrayerStatItem} from '../PrayerStatItem';

const PrayerStatsTable = () => {
  const prayersStatsData = [
    {
      title: 'Date Added',
      stats: 'July 25 2017',
    },
    {
      title: 'Times Prayed Total',
      stats: '123',
    },
    {
      title: 'Times Prayed by Me',
      stats: '63',
    },
    {
      title: 'Times Prayed by Others',
      stats: '55',
    },
  ];

  return (
    <View>
      <FlatList
        data={prayersStatsData}
        numColumns={2}
        renderItem={({item}) => (
          <PrayerStatItem stats={item.stats} title={item.title} />
        )}
        keyExtractor={item => item.stats}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: -16,
    marginBottom: 20,
  },
});

export default PrayerStatsTable;

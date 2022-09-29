import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../styles';

const PrayerStatItem = ({stats, title}: PrayerStatItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.stats}>{stats}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

type PrayerStatItemProps = {
  stats: string;
  title: string;
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: '50%',
    borderColor: theme.colors.border,
    borderWidth: 1,
    paddingVertical: 26,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 13,
  },

  stats: {fontSize: 22, color: theme.colors.primary},
});

export default PrayerStatItem;

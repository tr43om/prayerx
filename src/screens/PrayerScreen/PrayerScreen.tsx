import {View, StyleSheet} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';
import {useSelector} from 'react-redux';
import {RootState, selectPrayerById} from '../../store';
import {CommentsSection, MembersList, PrayerStatsTable} from '../../components';
import {Routes} from '../../types';

const PrayerScreen: React.FC<PrayerScreenProps> = ({
  route,
}: PrayerScreenProps) => {
  const prayer = useSelector((state: RootState) =>
    selectPrayerById(state, route.params.id),
  );

  return (
    <View style={styles.container}>
      <PrayerStatsTable />
      <MembersList />
      <CommentsSection prayerId={prayer.id} />
    </View>
  );
};

type PrayerScreenProps = NativeStackScreenProps<
  RootStackParams,
  Routes.prayer,
  undefined
>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PrayerScreen;

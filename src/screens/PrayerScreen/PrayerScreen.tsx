import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';
import {Routes} from '../../constants';

const PrayerScreen: React.FC<PrayerScreenProps> = ({
  navigation,
  route,
}: PrayerScreenProps) => {
  return (
    <View>
      <Text>PrayerScreen</Text>
    </View>
  );
};

type PrayerScreenProps = NativeStackScreenProps<
  RootStackParams,
  Routes.prayer,
  undefined
>;

export default PrayerScreen;

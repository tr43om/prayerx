import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';

const PrayerScreen = ({navigation, route}: PrayerScreenProps) => {
  return (
    <View>
      <Text>PrayerScreen</Text>
    </View>
  );
};

type PrayerScreenProps = NativeStackScreenProps<
  RootStackParams,
  'Prayer',
  undefined
>;

export default PrayerScreen;

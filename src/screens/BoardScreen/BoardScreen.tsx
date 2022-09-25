import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrayerScreen} from '../PrayerScreen';
import {HomeScreen} from '../HomeScreen';
import {
  PrayersTab,
  RootStackParams,
  SubscriptionsTab,
  Tabs,
} from '../root-routes';
import {PrayersScreen} from '../PrayersScreen';
import {SubscriptionsScreen} from '../SubscriptionsScreen';
import {Routes} from '../../constants';

const BoardScreen: React.FC<BoardScreenProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <PrayersTab.Screen name={Routes.prayers} component={PrayersScreen} />

      <SubscriptionsTab.Screen
        name={Routes.subscriptions}
        component={SubscriptionsScreen}
      />
    </Tabs.Navigator>
  );
};
type BoardScreenProps = NativeStackScreenProps<RootStackParams, 'Board'>;

export default BoardScreen;

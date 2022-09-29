import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  PrayersTab,
  RootStackParams,
  SubscriptionsTab,
  Tabs,
} from '../root-routes';
import {PrayersScreen} from '../PrayersScreen';
import {SubscriptionsScreen} from '../SubscriptionsScreen';
import {Routes} from '../../types';
import {theme} from '../../styles';
import {BarBadge} from '../../components';

const BoardScreen: React.FC<BoardScreenProps> = ({route}) => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          marginBottom: 15,
        },
        tabBarActiveTintColor: theme.colors.primary,
      }}>
      <PrayersTab.Screen
        name={Routes.prayers}
        children={() => <PrayersScreen boardId={route.params.id} />}
      />

      <SubscriptionsTab.Screen
        name={Routes.subscriptions}
        component={SubscriptionsScreen}
        options={{
          tabBarBadge: () => <BarBadge count={3} />,
        }}
      />
    </Tabs.Navigator>
  );
};
type BoardScreenProps = NativeStackScreenProps<RootStackParams, 'Board'>;

export default BoardScreen;

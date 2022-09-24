import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  PrayerScreen,
  BoardScreen,
  HomeStack,
  BoardStack,
  PrayerStack,
  RootStack,
  SignInStack,
  SignUpStack,
} from '../screens';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes, Statuses} from '../constants';
import {useSelector} from 'react-redux';
import {selectAuthRequestProgress} from '../store';
import {Text, TouchableOpacity} from 'react-native';
import {IconAdd} from '../assets';
import {AddButton} from '../components';
import {theme} from '../styles';

const Navigation = () => {
  const isAuthenticated = useSelector(selectAuthRequestProgress);

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: `${theme.colors.background}`,
            padding: 15,
          },
        }}>
        {isAuthenticated === Statuses.SUCCEEDED ? (
          <>
            <HomeStack.Screen
              name={Routes.home}
              component={HomeScreen}
              options={{
                headerRight: () => <AddButton />,
              }}
            />
            <BoardStack.Screen name={Routes.board} component={BoardScreen} />
            <PrayerStack.Screen name={Routes.prayer} component={PrayerScreen} />
          </>
        ) : (
          <>
            <SignInStack.Screen name={Routes.signin} component={SignInScreen} />
            <SignUpStack.Screen name={Routes.signup} component={SignUpScreen} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

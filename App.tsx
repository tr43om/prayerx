import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  PrayerScreen,
  BoardScreen,
  AuthStack,
  HomeStack,
  BoardStack,
  PrayerStack,
  RootStack,
  AppNavigation,
  AuthNavigation,
} from './src/screens';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes, Statuses} from './src/constants';
import {useSelector} from 'react-redux';
import {selectAuthRequestProgress, selectBoards} from './src/store';

const App = () => {
  const isAuthenticated = useSelector(selectAuthRequestProgress);

  return (
    <RootStack.Navigator>
      {isAuthenticated === Statuses.SUCCEEDED ? (
        <>
          <HomeStack.Screen name={Routes.home} component={HomeScreen} />
          <BoardStack.Screen
            name={Routes.board}
            component={BoardScreen}
            options={({
              route: {
                params: {name},
              },
            }) => ({title: name})}
          />
          <PrayerStack.Screen name={Routes.prayer} component={PrayerScreen} />
        </>
      ) : (
        <>
          <AuthStack.Screen name={Routes.signin} component={SignInScreen} />
          <AuthStack.Screen name={Routes.signup} component={SignUpScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default App;

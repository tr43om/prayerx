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
import {selectAuthRequestProgress} from './src/store';

const App = () => {
  const isAuthenticated = useSelector(selectAuthRequestProgress);
  console.log(isAuthenticated);
  return (
    <RootStack.Navigator>
      {isAuthenticated === Statuses.SUCCEEDED ? (
        <RootStack.Group>
          <HomeStack.Screen name={Routes.home} component={HomeScreen} />
          <BoardStack.Screen
            name={Routes.board}
            component={BoardScreen}
            options={({route}) => ({title: route.params.name})}
          />
          <PrayerStack.Screen name={Routes.prayer} component={PrayerScreen} />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <AuthStack.Screen name={Routes.signin} component={SignInScreen} />
          <AuthStack.Screen name={Routes.signup} component={SignUpScreen} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default App;

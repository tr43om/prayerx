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
} from './src/screens';

import React from 'react';

import {Routes} from './src/constants';

const App = () => {
  return (
    <RootStack.Navigator initialRouteName={Routes.home}>
      <HomeStack.Screen name={Routes.home} component={HomeScreen} />
      <AuthStack.Screen name={Routes.signin} component={SignInScreen} />
      <AuthStack.Screen name={Routes.signup} component={SignUpScreen} />
      <BoardStack.Screen name={Routes.board} component={BoardScreen} />
      <PrayerStack.Screen name={Routes.prayer} component={PrayerScreen} />
    </RootStack.Navigator>
  );
};

export default App;

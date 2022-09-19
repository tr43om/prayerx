import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  PrayerScreen,
  BoardScreen,
} from './src/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Routes} from './src/constants';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={Routes.home} component={HomeScreen} />
      <Stack.Screen name={Routes.signin} component={SignInScreen} />
      <Stack.Screen name={Routes.signup} component={SignUpScreen} />
      <Stack.Screen name={Routes.board} component={BoardScreen} />
      <Stack.Screen name={Routes.prayer} component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default App;

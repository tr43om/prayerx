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
import {NavigationContainer} from '@react-navigation/native';
import {Routes, Statuses} from './src/constants';
import {useSelector} from 'react-redux';
import {selectAuthRequestProgress} from './src/store';
import {View, Text} from 'react-native';

const App = () => {
  const isAuthenticated = useSelector(selectAuthRequestProgress);

  return (
    <RootStack.Navigator
      screenOptions={{contentStyle: {backgroundColor: '#fff', padding: 15}}}>
      {isAuthenticated === Statuses.SUCCEEDED ? (
        <>
          <HomeStack.Screen
            name={Routes.home}
            component={HomeScreen}
            options={{
              headerRight: () => (
                <View>
                  <Text style={{fontSize: 22}}>+</Text>
                </View>
              ),
            }}
          />
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

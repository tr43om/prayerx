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
import {Routes, Statuses} from '../types';
import {useSelector} from 'react-redux';
import {selectAuthRequestProgress} from '../store';
import {AddButton, PrayerHeader} from '../components';
import {theme} from '../styles';
import {IconPrayerLine, IconSettings} from '../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

            <BoardStack.Screen
              name={Routes.board}
              component={BoardScreen}
              options={({route}) => ({
                title: route.params.name,
                headerRight: () => (
                  <TouchableOpacity>
                    <IconSettings />
                  </TouchableOpacity>
                ),
              })}
            />
            <PrayerStack.Screen
              name={Routes.prayer}
              component={PrayerScreen}
              options={{
                header(props) {
                  return <PrayerHeader headerProps={props} />;
                },

                contentStyle: {
                  padding: 15,
                },

                headerRight: props => (
                  <TouchableOpacity>
                    <IconPrayerLine width={29} height={22} />
                  </TouchableOpacity>
                ),
              }}
            />
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

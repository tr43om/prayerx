import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  Home: undefined;
  Auth: undefined;
  Board: {name: string};
  Prayer: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const AuthStack = createNativeStackNavigator();

export const HomeStack = createNativeStackNavigator();

export const BoardStack = createNativeStackNavigator();

export const PrayerStack = createNativeStackNavigator();

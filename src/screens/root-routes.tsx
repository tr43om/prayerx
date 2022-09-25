import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export type RootStackParams = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Board: {name: string};
  Prayer: undefined;
};

export type TabsParams = {
  Prayers: undefined;
  Subscriptions: undefined;
};

export const Tabs = createMaterialTopTabNavigator<TabsParams>();

export const PrayersTab = createMaterialTopTabNavigator<TabsParams>();
export const SubscriptionsTab = createMaterialTopTabNavigator<TabsParams>();

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const SignInStack = createNativeStackNavigator<RootStackParams>();

export const SignUpStack = createNativeStackNavigator<RootStackParams>();

export const HomeStack = createNativeStackNavigator<RootStackParams>();

export const BoardStack = createNativeStackNavigator<RootStackParams>();

export const PrayerStack = createNativeStackNavigator<RootStackParams>();

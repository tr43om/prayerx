import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Board: {name: string};
  Prayer: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const SignInStack = createNativeStackNavigator<RootStackParams>();

export const SignUpStack = createNativeStackNavigator<RootStackParams>();

export const HomeStack = createNativeStackNavigator<RootStackParams>();

export const BoardStack = createNativeStackNavigator<RootStackParams>();

export const PrayerStack = createNativeStackNavigator<RootStackParams>();

import {api} from '../api';
import {ACCESS_TOKEN} from '../../constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = async (email: string, password: string) => {
  try {
    const {
      data: {token},
    } = await api.post('auth/sign-in', {email, password});

    if (token) {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (email: string, name: string, password: string) => {
  try {
    const {
      data: {token},
    } = await api.post('auth/sign-up', {email, name, password});

    if (token) {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
    }
  } catch (err) {
    console.log(err);
  }
};

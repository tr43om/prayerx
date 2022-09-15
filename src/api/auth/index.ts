import {api} from '../api';
import {ACCESS_TOKEN} from '../../constants';
import {AuthSignInDto, AuthSignUpDto} from '../../types';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = async ({email, password}: AuthSignInDto) => {
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

export const signUp = async ({email, name, password}: AuthSignUpDto) => {
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

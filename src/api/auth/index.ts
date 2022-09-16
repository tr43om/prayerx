import {api} from '../api';
import {ACCESS_TOKEN} from '../../constants';
import {AuthSignInDto, AuthSignUpDto} from '../../types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../http';

export const fetchSignIn = async ({email, password}: AuthSignInDto) => {
  try {
    const data = await api.post('auth/sign-in', {email, password});

    if (data.token) {
      await AsyncStorage.setItem(ACCESS_TOKEN, data.token);
    }

    return data;
  } catch (err) {
    console.log('ERROR FROM SIGN IN FETCH', err);
  }
};

export const fetchSignUp = async ({email, name, password}: AuthSignUpDto) => {
  try {
    const data = await api.post('auth/sign-up', {email, name, password});

    if (data.token) {
      await AsyncStorage.setItem(ACCESS_TOKEN, data.token);
    }
  } catch (err) {
    console.log(err);
  }
};

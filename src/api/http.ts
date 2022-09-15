import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN, BASE_URL} from '../constants';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const http = axios.create(config);

http.interceptors.request.use(async () => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers = {Authorization: `Bearer ${token}`};
  }
  return config;
});

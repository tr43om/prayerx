import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN, BASE_URL} from '../constants';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers = {Authorization: `Bearer ${token}`};
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default http;

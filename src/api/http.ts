import axios from 'axios';

import {ACCESS_TOKEN, BASE_URL} from '../constants';
import {storage} from '../services';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async config => {
    const token = await storage.get(ACCESS_TOKEN);
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

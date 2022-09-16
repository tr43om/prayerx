import {AxiosRequestConfig} from 'axios';
import http from './http';

export const api = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    try {
      const {data} = await http.get(url, config);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async <TData>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig,
  ) => {
    try {
      const res = await http.post(url, data, config);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  patch: async <TData>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig,
  ) => {
    try {
      const res = await http.patch(url, data, config);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  put: async <TData>(url: string, data: TData, config?: AxiosRequestConfig) => {
    try {
      const res = await http.put(url, data, config);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (url: string, config?: AxiosRequestConfig) => {
    try {
      const res = await http.delete(url, config);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

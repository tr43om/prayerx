import {AxiosRequestConfig} from 'axios';
import http from './http';

export const api = {
  get: async <TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    try {
      const {data} = await http.get(url, config);
      return data;
    } catch (error) {
      throw error;
    }
  },

  post: async <TResponse, TData = {}>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    try {
      const res = await http.post(url, data, config);
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  patch: async <TResponse, TData = {}>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    try {
      const res = await http.patch(url, data, config);
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  put: async <TResponse, TData = {}>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    try {
      const res = await http.put(url, data, config);
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async <TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    try {
      const res = await http.delete(url, config);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

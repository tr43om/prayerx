import {api} from '../api';
import {ACCESS_TOKEN} from '../../constants';
import {AuthSignInDto, AuthSignUpDto} from '../../types';

import {storage} from '../../services';
import {AuthResponseDto} from '../../types';

const AuthAPI = {
  signin: async ({email, password}: AuthSignInDto) => {
    const data = await api.post<AuthResponseDto>('auth/sign-in', {
      email,
      password,
    });

    if (data.token) {
      await storage.set(ACCESS_TOKEN, data.token);
    }

    return data;
  },
  signup: async ({email, name, password}: AuthSignUpDto) => {
    const data = await api.post<AuthResponseDto>('auth/sign-up', {
      email,
      name,
      password,
    });

    if (data.token) {
      await storage.set(ACCESS_TOKEN, data.token);
    }

    return data;
  },
};

export default AuthAPI;

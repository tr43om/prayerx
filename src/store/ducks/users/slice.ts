import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthResponseDto, AuthSignInDto, AuthSignUpDto} from '../../../types';

const initialState: UserSliceType = {
  name: '',
  email: '',
  requestInProgress: false,
  error: false,
};

type UserSliceType = {
  name: string;
  email: string;
  requestInProgress: boolean;
  error: boolean;
};

const {actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestSignIn: (state, {payload}: PayloadAction<AuthSignInDto>) => {
      state.requestInProgress = true;
    },
    signInFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestInProgress = false;
      state.error = false;
    },
    signInRejected: (state, {payload}) => {
      state.error = payload;
      state.requestInProgress = false;
    },

    requestSignUp: (state, {payload}: PayloadAction<AuthSignUpDto>) => {
      state.requestInProgress = true;
    },
    signUpFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestInProgress = false;
      state.error = false;
    },
    signUpRejected: (state, {payload}) => {
      state.error = payload;
      state.requestInProgress = false;
    },
  },
});

export const {
  requestSignIn,
  signInFulfilled,
  signInRejected,
  requestSignUp,
  signUpFulfilled,
  signUpRejected,
} = actions;
export const userReducer = reducer;

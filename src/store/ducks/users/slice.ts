import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthResponseDto, AuthSignInDto, AuthSignUpDto} from '../../../types';
import {Statuses} from '../../../constants';

const initialState: UserSliceType = {
  name: '',
  email: '',
  requestInProgress: Statuses.IDLE,
  error: false,
};

type UserSliceType = {
  name: string;
  email: string;
  requestInProgress: Statuses;
  error: boolean;
};

const {actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestSignIn: (state, {payload}: PayloadAction<AuthSignInDto>) => {
      state.requestInProgress = Statuses.PENDING;
    },
    signInFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestInProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    signInRejected: (state, {payload}) => {
      state.error = payload;
      state.requestInProgress = Statuses.FAILED;
    },

    requestSignUp: (state, {payload}: PayloadAction<AuthSignUpDto>) => {
      state.requestInProgress = Statuses.PENDING;
    },
    signUpFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestInProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    signUpRejected: (state, {payload}) => {
      state.error = payload;
      state.requestInProgress = Statuses.FAILED;
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

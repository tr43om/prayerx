import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthResponseDto, AuthSignInDto, AuthSignUpDto} from '../../../types';
import {Statuses} from '../../../types';
const initialState: UserSliceType = {
  name: '',
  email: '',
  requestProgress: Statuses.IDLE,
  error: false,
};

type UserSliceType = {
  name: string;
  email: string;
  requestProgress: Statuses;
  error: boolean;
};

const {actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestSignIn: (state, {payload}: PayloadAction<AuthSignInDto>) => {
      state.requestProgress = Statuses.PENDING;
    },
    signInFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    signInRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestSignUp: (state, {payload}: PayloadAction<AuthSignUpDto>) => {
      state.requestProgress = Statuses.PENDING;
    },
    signUpFulfilled: (state, {payload}: PayloadAction<AuthResponseDto>) => {
      state.email = payload.email;
      state.name = payload.name;
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    signUpRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
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

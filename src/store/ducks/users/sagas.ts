import {
  takeLeading,
  put,
  call,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {
  signInFulfilled,
  requestSignIn,
  signInRejected,
  requestSignUp,
  signUpFulfilled,
  signUpRejected,
} from './slice';

import {AuthAPI} from '../../../api';
import {AuthResponseDto} from '../../../types';

function* fetchSignIn({
  payload,
}: ReturnType<typeof requestSignIn>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const data: AuthResponseDto = yield call(AuthAPI.signin, payload);
    yield put(signInFulfilled(data));
  } catch (error) {
    yield put(signInRejected(error));
  }
}

function* fetchSignUp({
  payload,
}: ReturnType<typeof requestSignUp>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const data: AuthResponseDto = yield call(AuthAPI.signup, payload);
    yield put(signUpFulfilled(data));
  } catch (error) {
    yield put(signUpRejected(error));
  }
}

function* watchSaga() {
  yield takeLeading(requestSignIn.type, fetchSignIn);
  yield takeLeading(requestSignUp.type, fetchSignUp);
}
export default function* userSaga() {
  yield watchSaga();
}

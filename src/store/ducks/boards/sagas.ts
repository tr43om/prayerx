import {
  takeLeading,
  put,
  call,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {requestGetBoards, getBoardsFulfilled, getBoardsRejected} from './slice';

import {BoardsAPI} from '../../../api';
import {BoardsResponseDto} from '../../../types';

function* fetchGetBoards(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const data: BoardsResponseDto[] = yield call(BoardsAPI.get);
    console.log(data);
    yield put(getBoardsFulfilled(data));
  } catch (error) {
    yield put(getBoardsRejected(error));
  }
}

function* watchSaga() {
  yield takeLeading(requestGetBoards.type, fetchGetBoards);
}
export default function* boardsSaga() {
  yield watchSaga();
}

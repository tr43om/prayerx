import {
  takeLeading,
  put,
  call,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {
  requestGetBoards,
  getBoardsFulfilled,
  getBoardsRejected,
  requestAddBoard,
  requestDeleteBoard,
  addBoardFulfilled,
  addBoardRejected,
  deleteBoardFulfilled,
  deleteBoardRejected,
} from './slice';

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

function* fetchAddBoard({
  payload,
}: ReturnType<typeof requestAddBoard>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const data: BoardsResponseDto = yield call(BoardsAPI.add, payload);
    console.log(data);
    yield put(addBoardFulfilled(data));
  } catch (error) {
    yield put(addBoardRejected(error));
  }
}

function* fetchDeleteBoard({
  payload,
}: ReturnType<typeof requestDeleteBoard>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    yield call(BoardsAPI.delete, {id: payload});
    yield put(deleteBoardFulfilled(payload));
  } catch (error) {
    yield put(deleteBoardRejected(error));
  }
}

function* watchSaga() {
  yield takeLeading(requestGetBoards.type, fetchGetBoards);
  yield takeLeading(requestAddBoard.type, fetchAddBoard);
  yield takeLeading(requestDeleteBoard.type, fetchDeleteBoard);
}
export default function* boardsSaga() {
  yield watchSaga();
}

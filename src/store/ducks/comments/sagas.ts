import {
  takeLeading,
  put,
  call,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {
  requestGetComments,
  getCommentsFulfilled,
  getCommentsRejected,
  requestAddComment,
  requestDeleteComment,
  addCommentFulfilled,
  addCommentRejected,
  deleteCommentFulfilled,
  deleteCommentRejected,
  requestUpdateComment,
  updateCommentFulfilled,
  updateCommentRejected,
} from './slice';

import {CommentsAPI} from '../../../api';
import {CommentsResponseDto} from '../../../types';

function* fetchGetComments(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const data: CommentsResponseDto[] = yield call(CommentsAPI.get);

    yield put(getCommentsFulfilled(data));
  } catch (error) {
    yield put(getCommentsRejected(error));
  }
}

function* fetchAddComment({
  payload,
}: ReturnType<typeof requestAddComment>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const data: CommentsResponseDto = yield call(CommentsAPI.add, payload);

    yield put(addCommentFulfilled(data));
  } catch (error) {
    yield put(addCommentRejected(error));
  }
}

function* fetchDeleteComment({
  payload,
}: ReturnType<typeof requestDeleteComment>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    yield call(CommentsAPI.delete, {id: payload});
    yield put(deleteCommentFulfilled(payload));
  } catch (error) {
    yield put(deleteCommentRejected(error));
  }
}

function* fetchUpdateComment({
  payload,
}: ReturnType<typeof requestUpdateComment>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    yield call(CommentsAPI.update, {id: payload.id, data: payload.data});
    yield put(updateCommentFulfilled(payload));
  } catch (error) {
    yield put(updateCommentRejected(error));
  }
}

function* watchSaga() {
  yield takeLeading(requestGetComments.type, fetchGetComments);
  yield takeLeading(requestAddComment.type, fetchAddComment);
  yield takeLeading(requestDeleteComment.type, fetchDeleteComment);
  yield takeLeading(requestUpdateComment.type, fetchUpdateComment);
}
export default function* commentsSaga() {
  yield watchSaga();
}

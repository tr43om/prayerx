import {
  takeLeading,
  put,
  call,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {
  requestGetPrayers,
  getPrayersFulfilled,
  getPrayersRejected,
  requestAddPrayer,
  requestDeletePrayer,
  addPrayerFulfilled,
  addPrayerRejected,
  deletePrayerFulfilled,
  deletePrayerRejected,
  requestUpdatePrayer,
  updatePrayerFulfilled,
  updatePrayerRejected,
} from './slice';

import {PrayersAPI} from '../../../api';
import {PrayersResponseDto} from '../../../types';

function* fetchGetPrayers(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const data: PrayersResponseDto[] = yield call(PrayersAPI.get);

    yield put(getPrayersFulfilled(data));
  } catch (error) {
    yield put(getPrayersRejected(error));
  }
}

function* fetchAddPrayer({
  payload,
}: ReturnType<typeof requestAddPrayer>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const data: PrayersResponseDto = yield call(PrayersAPI.add, payload);

    yield put(addPrayerFulfilled(data));
  } catch (error) {
    yield put(addPrayerRejected(error));
  }
}

function* fetchDeletePrayer({
  payload,
}: ReturnType<typeof requestDeletePrayer>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    yield call(PrayersAPI.delete, {id: payload});
    yield put(deletePrayerFulfilled(payload));
  } catch (error) {
    yield put(deletePrayerRejected(error));
  }
}

function* fetchUpdatePrayer({
  payload,
}: ReturnType<typeof requestUpdatePrayer>): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    yield call(PrayersAPI.update, {id: payload.id, data: payload.data});
    yield put(updatePrayerFulfilled(payload));
  } catch (error) {
    yield put(updatePrayerRejected(error));
  }
}

function* watchSaga() {
  yield takeLeading(requestGetPrayers.type, fetchGetPrayers);
  yield takeLeading(requestAddPrayer.type, fetchAddPrayer);
  yield takeLeading(requestDeletePrayer.type, fetchDeletePrayer);
  yield takeLeading(requestUpdatePrayer.type, fetchUpdatePrayer);
}
export default function* prayersSaga() {
  yield watchSaga();
}

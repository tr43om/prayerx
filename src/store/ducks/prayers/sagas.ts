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

function* watchSaga() {
  yield takeLeading(requestGetPrayers.type, fetchGetPrayers);
  yield takeLeading(requestAddPrayer.type, fetchAddPrayer);
  yield takeLeading(requestDeletePrayer.type, fetchDeletePrayer);
}
export default function* prayersSaga() {
  yield watchSaga();
}

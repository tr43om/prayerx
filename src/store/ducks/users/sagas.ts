import {takeLeading} from 'redux-saga/effects';

export function* workerSaga() {
  console.log('clicked');
}
export function* watchSaga() {
  yield takeLeading('CLICK', workerSaga);
}
export default function* userSaga() {
  yield watchSaga();
}

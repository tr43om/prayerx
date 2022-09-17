import {all, call, spawn} from 'redux-saga/effects';
import {userReducer} from './users';
import userSaga from './users/sagas';

export const reducers = {
  user: userReducer,
};

export default function* rootSaga(): Generator<any, void, any> {
  const sagas = [userSaga];

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log(error);
        }
      }
    });
  });

  yield all(retrySagas);
}

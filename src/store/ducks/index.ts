import {all, call, spawn} from 'redux-saga/effects';
import {userReducer} from './users';
import {boardsReducer} from './boards';
import userSaga from './users/sagas';
import boardsSaga from './boards/sagas';
import {prayersReducer} from './prayers';
import prayersSaga from './prayers/sagas';
import {commentsReducer} from './comments';
import commentsSaga from './comments/sagas';

export const reducers = {
  user: userReducer,
  boards: boardsReducer,
  prayers: prayersReducer,
  comments: commentsReducer,
};

export * from './users';
export * from './boards';
export * from './prayers';
export * from './comments';

export default function* rootSaga(): Generator<any, void, any> {
  const sagas = [userSaga, boardsSaga, prayersSaga, commentsSaga];

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

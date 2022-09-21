import {all, call, spawn} from 'redux-saga/effects';
import {userReducer} from './users';
import {boardsReducer} from './boards';
import userSaga from './users/sagas';
import boardsSaga from './boards/sagas';

export const reducers = {
  user: userReducer,
  boards: boardsReducer,
};

export * from './users';
export * from './boards';

export default function* rootSaga(): Generator<any, void, any> {
  const sagas = [userSaga, boardsSaga];

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

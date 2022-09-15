import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer';
import {useDispatch} from 'react-redux';
import userSaga from './ducks/users/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createFlipperDebugger = require('redux-flipper').default;

      return getDefaultMiddleware().concat(
        sagaMiddleware,
        createFlipperDebugger(),
      );
    }
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

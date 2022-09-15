import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectUser = createSelector(
  (state: RootState) => state.user,
  user => user,
);

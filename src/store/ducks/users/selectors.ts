import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectAuthRequestProgress = createSelector(
  ({user: {requestProgress}}: RootState) => requestProgress,
  user => user,
);

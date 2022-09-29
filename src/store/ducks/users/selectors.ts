import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectUsername = createSelector(
  ({user: {name}}: RootState) => name,
  username => username,
);

export const selectAuthRequestProgress = createSelector(
  ({user: {requestProgress}}: RootState) => requestProgress,
  user => user,
);

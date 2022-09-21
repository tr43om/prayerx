import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectBoards = createSelector(
  ({boards: {boards}}: RootState) => boards,
  boards => boards,
);

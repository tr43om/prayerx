import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectBoards = createSelector(
  ({boards: {boards}}: RootState) => boards,
  boards => boards,
);

export const selectCreateBoardModalVisibility = createSelector(
  ({boards: {creatingNewBoard}}: RootState) => creatingNewBoard,
  isCreatingNewBoard => isCreatingNewBoard,
);

export const selectBoardRequestProgress = createSelector(
  ({boards: {requestProgress}}: RootState) => requestProgress,
  requestProgress => requestProgress,
);

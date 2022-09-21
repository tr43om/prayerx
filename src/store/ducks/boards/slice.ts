import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BoardsResponseDto} from '../../../types';
import {Statuses} from '../../../constants';

const initialState: BoardsSliceType = {
  boards: [],
  requestProgress: Statuses.IDLE,
  error: false,
};

type BoardsSliceType = {
  boards: BoardsResponseDto[];
  requestProgress: Statuses;
  error: boolean;
};

const {actions, reducer} = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    requestGetBoards: state => {
      state.requestProgress = Statuses.PENDING;
    },
    getBoardsFulfilled: (
      state,
      {payload}: PayloadAction<BoardsResponseDto[]>,
    ) => {
      state.boards = payload;
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    getBoardsRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },
  },
});

export const {requestGetBoards, getBoardsFulfilled, getBoardsRejected} =
  actions;
export const boardsReducer = reducer;

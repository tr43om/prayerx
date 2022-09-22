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

    requestAddBoard: (
      state,
      {payload}: PayloadAction<{title: string; description: string}>,
    ) => {
      state.requestProgress = Statuses.PENDING;
    },
    addBoardFulfilled: (state, {payload}: PayloadAction<BoardsResponseDto>) => {
      state.boards = [payload, ...state.boards];
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    addBoardRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestDeleteBoard: (state, {payload}: PayloadAction<number>) => {
      state.requestProgress = Statuses.PENDING;
    },
    deleteBoardFulfilled: (state, {payload}: PayloadAction<number>) => {
      state.boards = state.boards.filter(board => board.id !== payload);
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    deleteBoardRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },
  },
});

export const {
  requestGetBoards,
  getBoardsFulfilled,
  getBoardsRejected,
  requestAddBoard,
  requestDeleteBoard,
  addBoardFulfilled,
  addBoardRejected,
  deleteBoardFulfilled,
  deleteBoardRejected,
} = actions;
export const boardsReducer = reducer;

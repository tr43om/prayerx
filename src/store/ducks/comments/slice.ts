import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  CommentsRequestDto,
  CommentsResponseDto,
  CommentsUpdateDto,
} from '../../../types';
import {Statuses} from '../../../constants';

const initialState: CommentsSliceType = {
  comments: [],
  requestProgress: Statuses.IDLE,
  // error: false,
};

type CommentsSliceType = {
  comments: CommentsResponseDto[];
  requestProgress: Statuses;
  // error: boolean;
};

const {actions, reducer} = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    requestGetComments: state => {
      state.requestProgress = Statuses.PENDING;
    },
    getCommentsFulfilled: (
      state,
      {payload}: PayloadAction<CommentsResponseDto[]>,
    ) => {
      state.comments = payload.reverse();
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    getCommentsRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestAddComment: (
      state,
      {payload}: PayloadAction<CommentsRequestDto>,
    ) => {
      state.requestProgress = Statuses.PENDING;
    },
    addCommentFulfilled: (
      state,
      {payload}: PayloadAction<CommentsResponseDto>,
    ) => {
      state.comments = [payload, ...state.comments];
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    addCommentRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestDeleteComment: (state, {payload}: PayloadAction<number>) => {
      state.requestProgress = Statuses.PENDING;
    },
    deleteCommentFulfilled: (state, {payload}: PayloadAction<number>) => {
      state.comments = state.comments.filter(comment => comment.id !== payload);
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    deleteCommentRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestUpdateComment: (
      state,
      {payload}: PayloadAction<CommentsUpdateDto>,
    ) => {
      state.requestProgress = Statuses.PENDING;
    },
    updateCommentFulfilled: (
      state,
      {payload}: PayloadAction<CommentsUpdateDto>,
    ) => {
      state.comments = state.comments.map(comment => {
        if (payload.id === comment.id) {
          return payload.data;
        }
        return comment;
      });

      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    updateCommentRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },
  },
});

export const {
  requestGetComments,
  getCommentsFulfilled,
  getCommentsRejected,
  requestAddComment,
  requestDeleteComment,
  addCommentFulfilled,
  addCommentRejected,
  deleteCommentFulfilled,
  deleteCommentRejected,
  requestUpdateComment,
  updateCommentFulfilled,
  updateCommentRejected,
} = actions;
export const commentsReducer = reducer;

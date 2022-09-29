import {createSelector} from '@reduxjs/toolkit';
import {CommentsResponseDto} from '../../../types';
import {RootState} from '../../store';

export const selectComments = createSelector(
  ({comments: {comments}}: RootState) => comments,
  comments => comments,
);

const selectIdForComments = (state: RootState, columnId: number) => columnId;

export const selectCommentsById = createSelector(
  [selectComments, selectIdForComments],
  (comments: CommentsResponseDto[], commentId) => {
    return comments.filter(comment => comment.prayerId === commentId);
  },
);

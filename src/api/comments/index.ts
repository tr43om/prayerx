import {api} from '../api';

import {
  CommentsRequestDto,
  CommentsResponseDto,
  CommentsUpdateDto,
} from '../../types';

const CommentsApi = {
  get: async (id?: number) => {
    if (id) {
      return await api.get<CommentsResponseDto>(`comments/${id}`);
    }
    return await api.get<CommentsResponseDto[]>('comments');
  },

  add: async ({body, created, prayerId}: CommentsRequestDto) => {
    const data = await api.post<CommentsResponseDto>('comments', {
      body,
      created,
      prayerId,
    });

    return data;
  },

  update: async ({data, id}: CommentsUpdateDto) => {
    await api.put(`comments/${id}`, data);
  },

  delete: async ({id}: {id: number}) => {
    await api.delete(`comments/${id}`);
  },
};

export default CommentsApi;

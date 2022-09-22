import {api} from '../api';
import {
  BoardsResponseDto,
  BoardsRequestDto,
  BoardsUpdateDto,
} from '../../types';

const BoardsAPI = {
  get: async () => {
    const data = await api.get<BoardsResponseDto>('columns');

    return data;
  },

  add: async ({title, description}: BoardsRequestDto) => {
    const data = await api.post<BoardsResponseDto[]>('columns', {
      title,
      description,
    });

    return data;
  },

  update: async ({title, description, id}: BoardsUpdateDto) => {
    await api.put(`columns/${id}`, {title, description});
  },

  delete: async ({id}: {id: number}) => {
    await api.delete(`columns/${id}`);
  },
};

export default BoardsAPI;

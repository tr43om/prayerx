import {api} from '../api';
import {BoardsResponseDto} from '../../types';

const BoardsAPI = {
  get: async () => {
    const data = await api.get<BoardsResponseDto>('columns');

    return data;
  },
};

export default BoardsAPI;

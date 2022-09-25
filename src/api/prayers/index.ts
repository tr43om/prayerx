import {api} from '../api';

import {
  PrayersResponseDto,
  PrayersUpdateDto,
  PrayersRequestDto,
} from '../../types';

const PrayersApi = {
  get: async () => {
    const data = await api.get<PrayersResponseDto[]>('prayers');

    return data;
  },

  add: async ({title, description, checked, columnId}: PrayersRequestDto) => {
    const data = await api.post<PrayersResponseDto>('prayers', {
      title,
      description,
      checked,
      columnId,
    });

    return data;
  },

  update: async ({
    title,
    description,
    checked,
    columnId,
    id,
  }: PrayersUpdateDto) => {
    await api.put(`prayers/${id}`, {title, description, checked, columnId});
  },

  delete: async ({id}: {id: number}) => {
    await api.delete(`prayers/${id}`);
  },
};

export default PrayersApi;

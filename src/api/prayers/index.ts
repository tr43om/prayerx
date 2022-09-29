import {api} from '../api';

import {
  PrayersResponseDto,
  PrayersUpdateDto,
  PrayersRequestDto,
} from '../../types';

const PrayersApi = {
  get: async (id?: number) => {
    if (id) {
      return await api.get<PrayersResponseDto>(`prayers/${id}`);
    }
    return await api.get<PrayersResponseDto[]>('prayers');
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

  update: async ({data, id}: PrayersUpdateDto) => {
    await api.put(`prayers/${id}`, data);
  },

  delete: async ({id}: {id: number}) => {
    await api.delete(`prayers/${id}`);
  },
};

export default PrayersApi;

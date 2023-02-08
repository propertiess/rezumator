import { Fields } from '@/types';

import instance from '../api/instance';

const endpoint = '/users';

export const FieldsService = {
  async getById(id: string) {
    const { data } = await instance.get<Fields>(`${endpoint}/${id}/fields`);
    return data;
  },

  async setById(id: string, fields: Fields) {
    const { data } = await instance.post<Fields>(
      `${endpoint}/${id}/fields`,
      fields
    );
    return data;
  }
};

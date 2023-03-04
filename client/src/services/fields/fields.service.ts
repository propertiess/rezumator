import { instance } from '@/services/api';
import { Fields } from '@/types';

const endpoint = '/resumes';

export const FieldsService = {
  async getById(id: string) {
    const { data } = await instance.get<Fields>(`${endpoint}/${id}`);
    return data;
  },

  async setById(userId: string, id: string, fields: Fields) {
    const { data } = await instance.post<Fields>(`${endpoint}`, {
      userId,
      id,
      fields
    });
    return data;
  }
};

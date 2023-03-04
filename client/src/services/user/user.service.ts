import { instance } from '@/services/api';

import { User } from '../auth';

const endpoint = '/users';

export const UserService = {
  async getById(id: string) {
    const { data } = await instance.get<User>(`${endpoint}/${id}`);
    return data;
  }
};

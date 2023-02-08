import { initialFields } from '@/context';
import { instance } from '@/services/api';

import { User } from './auth.types';

const endpoint = '/auth';

export const AuthService = {
  async createUser(username: string, password: string, fields = initialFields) {
    const { data } = await instance.post<User>(`${endpoint}/signup`, {
      username,
      password,
      fields
    });
    return data;
  },

  async login(username: string, password: string) {
    const { data } = await instance.post<User>(`${endpoint}/login`, {
      username,
      password
    });
    return data;
  }
};

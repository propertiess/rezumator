import instance from '../api/instance';
import { User } from './auth.types';

import { store } from '@/store';

const endpoint = '/auth';

export const AuthService = {
  async createUser(username: string, password: string) {
    const { data } = await instance.post<User>(`${endpoint}/signup`, {
      username,
      password,
      fields: store.getState().rezumator.fields
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

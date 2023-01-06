import { store } from '@/store';
import instance from '../api/instance';
import { User } from './auth.types';

export const AuthService = {
  async createUser(username: string, password: string) {
    const { data } = await instance.post<User>('/users', {
      username,
      password,
      fields: store.getState().rezumator.fields
    });
    return data;
  },

  async login(username: string, password: string) {
    const { data } = await instance.post<User>('/users/auth', {
      username,
      password
    });
    return data;
  }
};

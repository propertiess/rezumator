import { RezumatorState } from '@/store/slices/rezumator';
import instance from '../api/instance';

export const RezumatorService = {
  async getFields(id: string) {
    const { data } = await instance.get<RezumatorState>(`/users/${id}/fields`);
    return data;
  },

  async getInitialFields() {
    const { data } = await instance.get<RezumatorState>(`/rezumator`);
    return data;
  },

  async setFields(id: string, rezumator: RezumatorState) {
    const { data } = await instance.post<RezumatorState>(
      `/users/${id}/fields`,
      rezumator
    );
    return data;
  }
};

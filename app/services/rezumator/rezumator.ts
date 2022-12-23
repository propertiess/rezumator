import { RezumatorState } from '@/store/slices/rezumator';
import { instance } from '../api/instance';

export const RezumatorService = {
  async getFields() {
    const { data } = await instance.get<RezumatorState>('/rezumator');
    return data;
  },

  async setFields(rezumator: RezumatorState) {
    const { data } = await instance.post<RezumatorState>(
      '/rezumator',
      rezumator
    );
    return data;
  }
};

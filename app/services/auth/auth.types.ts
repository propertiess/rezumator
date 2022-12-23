import { RezumatorState } from '@/store/slices/rezumator';

export type User = {
  id: string;
  username: string;
  password: string;
  fields: RezumatorState;
};

import { RezumatorState } from '@/store/slices/rezumator';

export type User = {
  id: string;
  username: string;
  password: string;
  fields: RezumatorState;
};

export type SimpleUser = Omit<User, 'id' | 'fields'>;

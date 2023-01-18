import { RezumatorState } from '@/store/slices/rezumator';

export type User = {
  _id: string;
  username: string;
  password: string;
  fields: RezumatorState;
};

export type SimpleUser = Omit<User, '_id' | 'fields'>;

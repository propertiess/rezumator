import { Fields } from '@/types';

export type User = {
  _id: string;
  username: string;
  password: string;
  fields: Fields;
};

export type SimpleUser = Omit<User, '_id' | 'fields'>;

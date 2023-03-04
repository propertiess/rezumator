import { FieldsDto } from '../fields/fields.dto';

export type User = {
  username: string;
  password: string;
  fields: FieldsDto;
};

export type FullUser = User & {
  id: string;
};

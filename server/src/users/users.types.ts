import { FieldsDto } from '../fields/fields.dto';

export type User = {
  username: string;
  password: string;
  fields: FieldsDto;
};

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { FieldsDto } from 'src/fields/fields.dto';
import { initialRezumator } from 'src/fields/utils';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ type: FieldsDto, default: initialRezumator })
  fields: FieldsDto;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

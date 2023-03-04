import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

import {
  ResumeEntity,
  ResumeSchema
} from './../../resumes/schemas/resume.schema';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ type: ResumeSchema })
  @Type(() => ResumeEntity)
  fields: ResumeEntity;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

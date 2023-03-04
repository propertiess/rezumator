import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'ResumeEntity', required: true })
  fields!: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

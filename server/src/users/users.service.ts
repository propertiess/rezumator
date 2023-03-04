import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FieldsDto } from '../fields/fields.dto';
import { getFullFields } from '../utils/getFullFields';
import { UserEntity, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>
  ) {}

  async getById(id: string): Promise<UserEntity> {
    return this.userModel.findById(id);
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  async getFieldsById(id: string): Promise<FieldsDto> {
    const user = await this.getById(id);

    return user.fields;
  }

  async setFieldsUser(id: string, fields: FieldsDto): Promise<FieldsDto> {
    fields = getFullFields(fields);

    await this.userModel.updateOne({ _id: id }, { fields });
    return fields;
  }
}

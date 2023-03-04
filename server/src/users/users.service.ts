import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ResumeDocument,
  ResumeEntity
} from 'src/resumes/schemas/resume.schema';

import { FieldsDto } from '../fields/fields.dto';
import { getFullFields } from '../utils/getFullFields';
import { UserEntity, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>,
    @InjectModel(ResumeEntity.name)
    private resumeModel: Model<ResumeDocument>
  ) {}

  async getById(id: string): Promise<UserEntity> {
    return this.userModel.findById(id);
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  // async getFieldsById(id: string): Promise<ResumeEntity> {
  //   const user = await this.getById(id);

  //   return user.fields;
  // }
}

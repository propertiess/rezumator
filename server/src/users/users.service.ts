import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDocument, UserEntity } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>
  ) {}

  async getById(id: string): Promise<UserEntity> {
    return this.userModel.findById(id).populate('fields');
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userModel.find().populate('fields').exec();
  }
}

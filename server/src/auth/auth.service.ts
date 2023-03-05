import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ResumeDocument,
  ResumeEntity
} from 'src/resumes/schemas/resume.schema';

import { UserDocument, UserEntity } from 'src/users/schemas/user.schema';

import { CreateUserDto, GetUserDto } from '../users/dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>,
    @InjectModel(ResumeEntity.name)
    private resumeModel: Model<ResumeDocument>
  ) {}

  async createUser(dto: CreateUserDto): Promise<unknown> {
    const user = await this.userModel.findOne({ username: dto.username });

    const sameUsername = user?.username === dto.username;

    if (sameUsername) {
      throw new HttpException(
        'Пользователь уже существует!',
        HttpStatus.BAD_REQUEST
      );
    }

    const resume = await this.resumeModel.create(dto.fields);
    const newUser = await this.userModel.create({ ...dto, fields: resume._id });
    const _id = (newUser as unknown as { _doc: { _id: string } })._doc._id;

    return { ...dto, _id, fields: { ...dto.fields, _id: resume._id } };
  }

  async getUser(dto: GetUserDto): Promise<UserEntity> {
    const user = await this.userModel
      .findOne({
        username: dto.username,
        password: dto.password
      })
      .populate('fields');

    if (!user) {
      throw new HttpException(
        'Неверное имя пользователя или пароль!',
        HttpStatus.BAD_REQUEST
      );
    }

    return user;
  }
}

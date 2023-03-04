import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserEntity, UserDocument } from 'src/users/schemas/user.schema';

import { CreateUserDto, GetUserDto } from '../users/dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userModel.findOne({ username: dto.username });

    const sameUsername = user?.username === dto.username;

    if (sameUsername) {
      throw new HttpException(
        'Пользователь уже существует!',
        HttpStatus.BAD_REQUEST
      );
    }

    const newUser = await this.userModel.create(dto);

    return newUser;
  }

  async getUser(dto: GetUserDto): Promise<UserEntity> {
    const user = await this.userModel.findOne({
      username: dto.username,
      password: dto.password
    });

    if (!user) {
      throw new HttpException(
        'Неверное имя пользователя или пароль!',
        HttpStatus.BAD_REQUEST
      );
    }

    return user;
  }
}


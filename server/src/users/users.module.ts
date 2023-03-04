import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserEntity, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ResumeEntity } from 'src/resumes/schemas/resume.schema';
import { ResumeSchema } from './../resumes/schemas/resume.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: ResumeEntity.name, schema: ResumeSchema }
    ])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}

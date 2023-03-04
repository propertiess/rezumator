import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumeEntity, ResumeSchema } from 'src/resumes/schemas/resume.schema';

import { UserEntity, UserSchema } from 'src/users/schemas/user.schema';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: ResumeEntity.name, schema: ResumeSchema }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserEntity, UserSchema } from 'src/users/schemas/user.schema';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}


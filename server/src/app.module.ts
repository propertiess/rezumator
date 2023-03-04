import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@cluster0.y3bcfun.mongodb.net/?retryWrites=true&w=majority`
    ),
    AuthModule
  ]
})
export class AppModule {}

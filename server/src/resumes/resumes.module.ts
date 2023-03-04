import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { ResumesController } from './resumes.controller';
import { ResumesService } from './resumes.service';
import { ResumeEntity, ResumeSchema } from './schemas/resume.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: ResumeEntity.name, schema: ResumeSchema }
    ])
  ],
  providers: [ResumesService, UsersService],
  controllers: [ResumesController]
})
export class ResumesModule {}

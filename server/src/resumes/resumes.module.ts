import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { ResumesController } from './resumes.controller';
import { ResumesService } from './resumes.service';
import { ResumeModel } from './schemas/resume.schema';
import { UserModel } from '../users/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([UserModel, ResumeModel])],
  providers: [UsersService, ResumesService],
  controllers: [ResumesController]
})
export class ResumesModule {}

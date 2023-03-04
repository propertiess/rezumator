import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

import { FieldsDto } from '../fields/fields.dto';
import { getFullFields } from '../utils/getFullFields';
import { ResumeDocument, ResumeEntity } from './schemas/resume.schema';

@Injectable()
export class ResumesService {
  constructor(
    @InjectModel(ResumeEntity.name)
    private resumeModel: Model<ResumeDocument>,
    private usersService: UsersService
  ) {}

  async getById(id: string) {
    const resume = await this.resumeModel.findById(id);

    return resume;
  }

  async getByUserId(id: string) {
    const user = await this.usersService.getById(id);

    return user.fields;
  }

  async setResumeFields(
    userId: string,
    id: string,
    fields: FieldsDto
  ): Promise<FieldsDto> {
    const user = await this.usersService.getById(userId);

    if (user.fields._id + '' !== id) {
      throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
    }

    fields = getFullFields(fields);

    await this.resumeModel.updateOne({ _id: id }, fields);
    return fields;
  }
}

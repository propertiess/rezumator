import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req
} from '@nestjs/common';
import { Request } from 'express';
import { FieldsDto } from 'src/fields/fields.dto';
import { ResumesService } from './resumes.service';

@Controller('resumes')
export class ResumesController {
  constructor(private readonly resumesService: ResumesService) {}

  @Get(':id')
  getById(@Req() req: Request, @Param('id') id: string) {
    if (req.headers['secret'] === process.env['SECRET_KEY']) {
      return this.resumesService.getById(id);
    }
    throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  }

  @Post()
  setResumeFields(
    @Req() req: Request,
    @Body()
    updateFieldsDto: {
      id: string;
      userId: string;
      fields: FieldsDto;
    }
  ) {
    if (req.headers['secret'] === process.env['SECRET_KEY']) {
      return this.resumesService.setResumeFields(
        updateFieldsDto.userId,
        updateFieldsDto.id,
        updateFieldsDto.fields
      );
    }
    throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  }
}

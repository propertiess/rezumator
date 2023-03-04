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

import { FieldsDto } from '../fields/fields.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(@Req() req: Request) {
    if (req.headers['secret_all'] === process.env['SECRET_FOR_ALL']) {
      return this.usersService.getUsers();
    }
    throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  }

  @Get(':id')
  getById(@Req() req: Request, @Param('id') id: string) {
    if (req.headers['secret'] === process.env['SECRET_KEY']) {
      return this.usersService.getById(id);
    }
    throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  }

  // @Get(':id/fields')
  // getFieldsById(@Req() req: Request, @Param('id') id: string) {
  //   if (req.headers['secret'] === process.env['SECRET_KEY']) {
  //     return this.usersService.getFieldsById(id);
  //   }
  //   throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  // }

  // @Post(':id/fields')
  // setFieldsUser(
  //   @Req() req: Request,
  //   @Param('id') id: string,
  //   @Body() fields: FieldsDto
  // ) {
  //   if (req.headers['secret'] === process.env['SECRET_KEY']) {
  //     return this.usersService.setFieldsUser(id, fields);
  //   }
  //   throw new HttpException("You don't have rights", HttpStatus.BAD_GATEWAY);
  // }
}

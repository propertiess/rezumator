import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto, GetUserDto } from '../users/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  createUserDto(@Body() dto: CreateUserDto) {
    return this.authService.createUser(dto);
  }

  @Post('login')
  getUserDto(@Body() dto: GetUserDto) {
    return this.authService.getUser(dto);
  }
}

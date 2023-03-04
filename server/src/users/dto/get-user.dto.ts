import { IsString, MinLength } from 'class-validator';

export class GetUserDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(3)
  password: string;
}

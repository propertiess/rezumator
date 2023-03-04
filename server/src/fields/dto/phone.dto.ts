import { IsString } from 'class-validator';

export class PhoneDto {
  @IsString()
  code: string;

  @IsString()
  phone: string;
}

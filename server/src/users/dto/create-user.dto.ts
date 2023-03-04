import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

import { FieldsDto } from '../../fields/fields.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FieldsDto)
  fields: FieldsDto;
}

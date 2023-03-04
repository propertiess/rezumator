import { Type } from 'class-transformer';
import {
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';

import { Removal } from '../fields.types';

import { DateDto } from './date.dto';

export class PersonalInfoDto {
  @IsString()
  city: string;

  @IsString()
  citizenShip: string;

  @IsString()
  @ValidateIf((_, value) => value !== null)
  removal: Removal;

  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DateDto)
  @ValidateIf((_, value) => {
    return value !== null;
  })
  birthDay: DateDto | null;

  @IsString()
  fullBirthDay: string;
}

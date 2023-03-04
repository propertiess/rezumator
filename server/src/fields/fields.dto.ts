import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested
} from 'class-validator';

import { AboutInfoDto, OptionalInfoDto, PersonalInfoDto } from './dto';
import { EducationState, ExperienceState } from './fields.types';

export class FieldsDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AboutInfoDto)
  aboutInfo: AboutInfoDto;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PersonalInfoDto)
  personalInfo: PersonalInfoDto;

  @IsArray()
  educationInfo: EducationState[];

  @IsArray()
  experienceInfo: ExperienceState[];

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OptionalInfoDto)
  optionalInfo: OptionalInfoDto;
}

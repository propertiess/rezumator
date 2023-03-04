import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';

import { ScheduleOfWork } from '../fields.types';

import { PhoneDto } from './phone.dto';
import { SalaryDto } from './salary.dto';

export class AboutInfoDto {
  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsString()
  thirdName: string;

  @IsString()
  email: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SalaryDto)
  salary: SalaryDto;

  fullSalary: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PhoneDto)
  phoneNumber: PhoneDto;

  fullPhoneNumber: string;

  @IsString()
  @ValidateIf((_, value) => value !== null)
  scheduleOfWork: ScheduleOfWork;

  avatar: string;

  @IsString()
  profession: string;

  @IsBoolean()
  readyForTravel: boolean;
}

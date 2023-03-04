import { IsArray, IsBoolean, IsString } from 'class-validator';

import { DriveLicense } from '../fields.types';

export class OptionalInfoDto {
  @IsString()
  languages: string;

  @IsString()
  info: string;

  @IsBoolean()
  medBook: boolean;

  @IsArray()
  driveLicenses: DriveLicense[];
}

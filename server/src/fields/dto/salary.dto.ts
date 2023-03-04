import { IsString } from 'class-validator';

export class SalaryDto {
  @IsString()
  amountOfMoney: string;

  @IsString()
  symbolOfMoney: string;
}

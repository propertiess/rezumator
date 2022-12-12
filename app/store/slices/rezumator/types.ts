import { DateState } from '@/store/types';

export interface AboutInfoState {
  firstName: string;
  secondName: string;
  thirdName: string;
  email: string;
  salary: Salary;
  phoneNumber: Phone;
  scheduleOfWork: ScheduleOfWork;
  avatar: string;
  profession: string;
  readyForTravel: boolean;
}

export interface Phone {
  code: string;
  phone: string;
}

export interface Salary {
  symbolOfMoney: string;
  amountOfMoney: string;
}

export type ScheduleOfWork =
  | 'Полный рабочий день'
  | 'Частичная занятость в офисе'
  | 'Полный день удаленно'
  | 'Частичная занятость удаленно'
  | null;

export interface PersonalInfoState {
  city: string;
  citizenShip: string;
  removal: Removal;
  birthDay: DateState | null;
}

export type Removal =
  | 'Невозможен'
  | 'Возможен'
  | 'Нежелателен'
  | 'Желателен'
  | null;

export interface EducationState {
  form: FormEducation;
  institute: string;
  specialty: string;
  faculty: string;
  end: string;
}

export type FormEducation = 'Очная' | 'Заочная' | null;

export interface ExperienceState {
  organization: string;
  profession: string;
  startJob: DateState | null;
  endJob: DateState | null;
  duties: string;
}

export interface OptionalState {
  languages: string;
  info: string;
  medBook: boolean;
  driveLicenses: DriveLicense[];
}
export type DriveLicense = {
  type: 'M' | 'A' | 'B' | 'C' | 'D' | 'E' | 'TM' | 'TB';
  exist: boolean;
};

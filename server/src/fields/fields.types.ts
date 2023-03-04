export type DateState = {
  day: string;
  month: string;
  year: string;
};

export type JobDate = Omit<DateState, 'day'>;

export type ScheduleOfWork =
  | 'Полный рабочий день'
  | 'Частичная занятость в офисе'
  | 'Полный день удаленно'
  | 'Частичная занятость удаленно'
  | null;

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
  startJob: JobDate | null;
  endJob: JobDate | null;
  fullExperienceJob: string;
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

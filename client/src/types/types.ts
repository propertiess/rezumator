export type DateState = {
  day: string;
  month: string;
  year: string;
};

export type JobDate = Omit<DateState, 'day'>;

export type ResumeProps = {
  fields?: Fields;
};

export interface AboutInfoState {
  firstName: string;
  secondName: string;
  thirdName: string;
  email: string;
  salary: Salary;
  fullSalary: string;
  phoneNumber: Phone;
  fullPhoneNumber: string;
  scheduleOfWork: ScheduleOfWork;
  avatar: string | null;
  profession: string;
  readyForTravel: boolean;
}

export interface Phone {
  code: string;
  phone: string;
}

export interface Salary {
  amountOfMoney: string;
  symbolOfMoney: string;
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
  fullBirthDay: string;
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

export type Fields = {
  _id: string;
  aboutInfo: AboutInfoState;
  personalInfo: PersonalInfoState;
  educationInfo: EducationState[];
  experienceInfo: ExperienceState[];
  optionalInfo: OptionalState;
};

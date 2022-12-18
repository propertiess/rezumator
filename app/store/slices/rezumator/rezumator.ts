import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFullBirthDay } from '@/utils/getFullBirthDay';
import { getFullExperienceJob } from '@/utils/getFullExperienceJob';
import {
  AboutInfoState,
  EducationState,
  ExperienceState,
  OptionalState,
  PersonalInfoState
} from './types';

export interface RezumatorState {
  aboutInfo: AboutInfoState;
  personalInfo: PersonalInfoState;
  educationInfo: EducationState[];
  experienceInfo: ExperienceState[];
  optionalInfo: OptionalState;
}

export const initialEducation: EducationState = {
  form: null,
  faculty: '',
  institute: '',
  specialty: '',
  end: ''
};

export const initialExperience: ExperienceState = {
  organization: '',
  profession: '',
  startJob: null,
  fullExperienceJob: '',
  endJob: null,
  duties: ''
};

const initialState: RezumatorState = {
  aboutInfo: {
    firstName: '',
    secondName: '',
    thirdName: '',
    email: '',
    avatar: '',
    profession: '',
    readyForTravel: false,
    phoneNumber: {
      code: '+7',
      phone: ''
    },
    fullPhoneNumber: '',
    salary: {
      amountOfMoney: '',
      symbolOfMoney: '₽'
    },
    fullSalary: '',
    scheduleOfWork: null
  },
  personalInfo: {
    city: '',
    citizenShip: '',
    removal: null,
    birthDay: null,
    fullBirthDay: ''
  },
  educationInfo: [],
  experienceInfo: [],
  optionalInfo: {
    languages: '',
    medBook: false,
    driveLicenses: [
      { type: 'M', exist: false },
      { type: 'A', exist: false },
      { type: 'B', exist: false },
      { type: 'C', exist: false },
      { type: 'D', exist: false },
      { type: 'E', exist: false },
      { type: 'TM', exist: false },
      { type: 'TB', exist: false }
    ],
    info: ''
  }
};

export const rezumatorSlice = createSlice({
  name: 'rezumator',
  initialState,
  reducers: {
    setRezumator: (state, action: PayloadAction<RezumatorState>) => {
      action.payload.aboutInfo.fullSalary =
        action.payload.aboutInfo.salary.amountOfMoney +
        ' ' +
        action.payload.aboutInfo.salary.symbolOfMoney;

      action.payload.aboutInfo.fullPhoneNumber =
        action.payload.aboutInfo.phoneNumber.code +
        ' ' +
        action.payload.aboutInfo.phoneNumber.phone;

      action.payload.personalInfo.fullBirthDay = getFullBirthDay(
        action.payload.personalInfo.birthDay!
      );

      action.payload.experienceInfo = action.payload.experienceInfo?.map(
        obj => {
          obj.fullExperienceJob = getFullExperienceJob(
            obj.startJob!,
            obj.endJob!
          );
          return obj;
        }
      );

      return (state = action.payload);
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.aboutInfo.avatar = action.payload;
    }
  }
});

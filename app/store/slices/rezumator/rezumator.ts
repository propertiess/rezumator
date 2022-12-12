import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  educationInfo: EducationState;
  experienceInfo: ExperienceState;
  optionalInfo: OptionalState;
}

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
      code: '+ 7',
      phone: ''
    },
    salary: {
      symbolOfMoney: '₽',
      amountOfMoney: ''
    },
    scheduleOfWork: null
  },
  personalInfo: {
    city: '',
    citizenShip: '',
    removal: null,
    birthDay: null
  },
  educationInfo: {
    form: null,
    faculty: '',
    institute: '',
    specialty: '',
    end: ''
  },
  experienceInfo: {
    organization: '',
    profession: '',
    startJob: null,
    endJob: null,
    duties: ''
  },
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
      return (state = action.payload);
    }
  }
});

import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { initialRezumator } from '@/utils/constants/initial_fields';

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

type State = {
  fields: RezumatorState;
};

const initialState: State = {
  fields: initialRezumator
};

export const rezumatorSlice = createSlice({
  name: 'rezumator',
  initialState,
  reducers: {
    setRezumator: (state, action: PayloadAction<RezumatorState>) => {
      state.fields = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.fields && (state.fields.aboutInfo.avatar = action.payload);
    }
  }
});

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
  fields: RezumatorState | null;
};

const initialState: State = {
  fields: null
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

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { EducationState, ExperienceState, Fields } from '@/types';

type IFieldsContext = {
  fields: Fields;
  setFields: Dispatch<SetStateAction<Fields>>;
  setAvatar: (src: string) => void;
};

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

const initialState = {
  fields: {
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
  }
} as unknown as IFieldsContext;

const FieldsContext = createContext(initialState);

export const FieldsProvider = ({ children }: PropsWithChildren) => {
  const [fields, setFields] = useState(() => initialState.fields);

  const setAvatar = (src: string) => {
    setFields({ ...fields, aboutInfo: { ...fields.aboutInfo, avatar: src } });
  };

  return (
    <FieldsContext.Provider value={{ fields, setFields, setAvatar }}>
      {children}
    </FieldsContext.Provider>
  );
};

export const useFields = () => useContext(FieldsContext);

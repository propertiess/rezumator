import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';

import { FieldsService } from '@/services/fields';
import { EducationState, ExperienceState, Fields } from '@/types';

import { useAuth } from './AuthContext';

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

export const initialFields = initialState.fields;

const FieldsContext = createContext(initialState);

export const FieldsProvider = ({ children }: PropsWithChildren) => {
  const { authToken } = useAuth();
  const [fields, setFields] = useState(() => initialFields);

  const setAvatar = (src: string) => {
    setFields({ ...fields, aboutInfo: { ...fields.aboutInfo, avatar: src } });
  };

  useEffect(() => {
    if (!authToken) {
      return;
    }

    const fetchFields = async () => {
      const data = await FieldsService.getById(authToken);
      setFields(data);
    };
    fetchFields();
  }, [authToken]);

  return (
    <FieldsContext.Provider value={{ fields, setFields, setAvatar }}>
      {children}
    </FieldsContext.Provider>
  );
};

export const useFields = () => useContext(FieldsContext);

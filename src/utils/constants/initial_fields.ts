import { RezumatorState } from '@/store/slices/rezumator';

export const initialRezumator: RezumatorState = {
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

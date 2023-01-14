import { getFullBirthDay } from '@/components/myresume/utils/getFullBirthDay';
import { getFullExperienceJob } from '@/components/myresume/utils/getFullExperienceJob';
import { RezumatorState } from '@/store/slices/rezumator';

export const getFullFields = (fields: RezumatorState) => {
  if (fields.aboutInfo.salary.amountOfMoney) {
    fields.aboutInfo.fullSalary =
      fields.aboutInfo.salary.amountOfMoney +
      ' ' +
      fields.aboutInfo.salary.symbolOfMoney;
  }

  fields.aboutInfo.fullPhoneNumber =
    fields.aboutInfo.phoneNumber.code +
    ' ' +
    fields.aboutInfo.phoneNumber.phone;

  fields.personalInfo.fullBirthDay = getFullBirthDay(
    fields.personalInfo.birthDay!
  );

  fields.experienceInfo = fields.experienceInfo?.map(obj => {
    obj.fullExperienceJob = getFullExperienceJob(obj.startJob!, obj.endJob!);
    return obj;
  });

  return fields;
};

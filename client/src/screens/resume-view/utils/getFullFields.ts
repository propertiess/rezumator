import { getFullBirthDay } from '@/screens/resume-view/utils/getFullBirthDay';
import { getFullExperienceJob } from '@/screens/resume-view/utils/getFullExperienceJob';
import { Fields } from '@/types';

export const getFullFields = (fields: Fields) => {
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

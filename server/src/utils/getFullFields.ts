import { FieldsDto } from '../fields/fields.dto';
import { getFullBirthDay, getFullExperienceJob } from '../fields/utils';

export const getFullFields = (fields: FieldsDto) => {
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

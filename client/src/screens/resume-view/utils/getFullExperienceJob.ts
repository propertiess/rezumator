import { JobDate } from '@/types';

export const getFullExperienceJob = (
  startOfJob: JobDate,
  endOfJob: JobDate
) => {
  return `${startOfJob.month}.${startOfJob.year} г. — ${endOfJob.month}.${endOfJob.year} г.`;
};

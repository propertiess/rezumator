import { SelectOptions } from '@/components/ui/select';

const addZeroToStartOrNot = (str: string) => {
  if (str.length === 1) {
    return `0${str}`;
  }

  return str;
};

const dictionaryMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const getDateStateForSelect = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const days: SelectOptions[] = [];

  for (let i = 1; i <= 31; i++) {
    days.push({
      value: addZeroToStartOrNot(i.toString()),
      label: addZeroToStartOrNot(i.toString()),
    });
  }

  const years: SelectOptions[] = [];
  for (let i = 1950; i <= currentYear; i++) {
    years.unshift({
      value: i.toString(),
      label: i.toString(),
    });
  }

  const educationYears = years.map(el => el);
  for (let i = currentYear + 1; i <= currentYear + 4; i++) {
    educationYears.unshift({
      value: i.toString(),
      label: i.toString(),
    });
  }

  const months: SelectOptions[] = [];
  const dictionaryMonths: SelectOptions[] = [];

  for (let i = 0; i < 12; i++) {
    months.push({
      value: addZeroToStartOrNot((i + 1).toString()),
      label: addZeroToStartOrNot((i + 1).toString()),
    });

    dictionaryMonths.push({
      value: dictionaryMonth[i],
      label: dictionaryMonth[i],
    });
  }

  return {
    years,
    educationYears,
    months,
    dictionaryMonths,
    days,
  };
};

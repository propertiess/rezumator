import { SelectOptions } from '@/components/common/ui/select';

const addZeroToStartOrNot = (str: string) => {
  if (str.length === 1) {
    return `0${str}`;
  }

  return str;
};

export const getDateStateForSelect = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const days: SelectOptions[] = [];

  for (let i = 1; i <= 31; i++) {
    days.push({
      value: addZeroToStartOrNot(i.toString()),
      label: addZeroToStartOrNot(i.toString())
    });
  }

  const years: SelectOptions[] = [];
  for (let i = 1950; i <= currentYear; i++) {
    years.unshift({
      value: i.toString(),
      label: i.toString()
    });
  }

  const educationYears = years.map(el => el);
  for (let i = currentYear + 1; i <= currentYear + 4; i++) {
    educationYears.unshift({
      value: i.toString(),
      label: i.toString()
    });
  }

  const months: SelectOptions[] = [];
  for (let i = 1; i <= 12; i++) {
    months.push({
      value: addZeroToStartOrNot(i.toString()),
      label: addZeroToStartOrNot(i.toString())
    });
  }

  return {
    years,
    educationYears,
    months,
    days
  };
};

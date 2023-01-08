export type DateState = {
  day: string;
  month: string;
  year: string;
};

export type JobDate = Omit<DateState, 'day'>;

export type DateState = {
  day: number;
  month: string;
  year: string;
};

export type JobDate = Omit<DateState, 'day'>;

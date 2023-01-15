import { useMemo } from 'react';

import { rezumatorSlice } from '../slices/rezumator';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from '@/store/hooks/useAppDispatch';

const allActions = {
  ...rezumatorSlice.actions
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};

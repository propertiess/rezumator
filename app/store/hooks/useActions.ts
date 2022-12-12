import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { rezumatorSlice } from '../slices/rezumator';

const allActions = {
  ...rezumatorSlice.actions
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};

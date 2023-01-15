import { createWrapper } from 'next-redux-wrapper';

import { rezumatorSlice } from './slices/rezumator';
import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState, Store, combineReducers } from 'redux';

import { fieldsApi } from '@/store/api/fields.api';

const rootReducer = combineReducers({
  rezumator: rezumatorSlice.reducer,
  [fieldsApi.reducerPath]: fieldsApi.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(fieldsApi.middleware)
  });
};

export const store = setupStore();

export const makeStore = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<Store<RootState>>(makeStore);

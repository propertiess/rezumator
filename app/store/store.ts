import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState, Store, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rezumatorSlice } from './slices/rezumator';

const rootReducer = combineReducers({
  rezumator: rezumatorSlice.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  });
};

export const store = setupStore();

export const makeStore = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<Store<RootState>>(makeStore);

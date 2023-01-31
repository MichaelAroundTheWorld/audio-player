import { configureStore } from '@reduxjs/toolkit';
import { favouriteReducer } from './reducers/favouriteReducer';
import { rootReducer } from './reducers/index';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

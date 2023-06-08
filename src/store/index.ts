import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/features/counter/counterSlice';
import reposReducer from '@/store/features/repos/reposSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    repos: reposReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

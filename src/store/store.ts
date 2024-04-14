import { configureStore } from '@reduxjs/toolkit';

import answersSlice from './slices/answersSlice/answersSlice';
import currentIndexSlice from './slices/currentQuestionIndexSlice/currentQuestionIndexSlice';

export const store = configureStore({
  reducer: { answers: answersSlice, currentIndex: currentIndexSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

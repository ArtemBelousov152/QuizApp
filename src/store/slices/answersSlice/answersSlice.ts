import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Answer } from 'types';

const answersInitState: Answer[] = [];

const answersSlice = createSlice({
  name: 'answers',
  initialState: answersInitState,
  reducers: {
    addAnswer: (
      state,
      action: PayloadAction<{ answer: Answer; currentQuestionIndex: number }>
    ) => {
      const newAnswers = [...state];
      newAnswers[action.payload.currentQuestionIndex] = action.payload.answer;
      return newAnswers;
    },
    setAnswers: (_, action: PayloadAction<Answer[]>) => {
      return action.payload;
    },
  },
});

export const { addAnswer, setAnswers } = answersSlice.actions;

export default answersSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const currentIndexInitState: number = 0;

const currentQuestionIndexSlice = createSlice({
  name: 'currentIndex',
  initialState: currentIndexInitState,
  reducers: {
    setCurrentQuestionIndex: (_, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setCurrentQuestionIndex } = currentQuestionIndexSlice.actions;

export default currentQuestionIndexSlice.reducer;

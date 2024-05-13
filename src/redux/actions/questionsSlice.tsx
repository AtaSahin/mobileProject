import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Question {
  id: string;
  text: string;
}

interface QuestionsState {
  list: Question[];
}

const initialState: QuestionsState = {
  list: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.list = action.payload;
    },
  },
});

export const {setQuestions} = questionsSlice.actions;

export default questionsSlice.reducer;

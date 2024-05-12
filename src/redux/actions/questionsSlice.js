import {createSlice} from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    list: [],
  },
  reducers: {
    setQuestions: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {setQuestions} = questionsSlice.actions;

export default questionsSlice.reducer;

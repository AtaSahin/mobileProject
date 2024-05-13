import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Category {
  id: string;
  name: string;
}

interface CategoriesState {
  data: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
    );
    const data = await response.json();
    return data.data;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectCategories = (state: {categories: CategoriesState}) =>
  state.categories;

export default categoriesSlice.reducer;

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import categoriesReducer from '../actions/categoriesSlice';
import questionsReducer from '../actions/questionsSlice';

interface PageState {
  currentPage: number;
}

interface RootState {
  page: PageState;
}

const initialState: PageState = {
  currentPage: 1,
};

const pageReducer = (state: PageState = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      const newPage = Math.min(state.currentPage + action.payload, 3);
      return {...state, currentPage: newPage};
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootState>({
  page: pageReducer,
  categories: categoriesReducer,
  questions: questionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

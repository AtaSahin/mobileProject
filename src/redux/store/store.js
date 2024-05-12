import {configureStore, combineReducers} from '@reduxjs/toolkit';
import categoriesReducer from '../actions/categoriesSlice';
import questionsReducer from '../actions/questionsSlice';

const initialState = {
  currentPage: 1,
};

const rootReducer = combineReducers({
  page: (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_PAGE':
        const newPage = Math.min(state.currentPage + action.payload, 3);
        return {...state, currentPage: newPage};
      default:
        return state;
    }
  },
  categories: categoriesReducer,
  questions: questionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
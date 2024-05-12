import {configureStore} from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      const newPage = Math.min(state.currentPage + action.payload, 3);
      return {...state, currentPage: newPage};
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

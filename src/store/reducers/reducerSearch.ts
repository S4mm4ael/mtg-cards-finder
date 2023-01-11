import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState } from 'store/initialState';

const isSearching = createAction<boolean>('IS_SEARCHING');
const setQuery = createAction<string>('SET_QUERY');

const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(isSearching, (state, action) => {
    state.isSearching = !!action.payload;
  });
  builder.addCase(setQuery, (state, action) => {
    state.query = action.payload;
  });
});

export default searchReducer;

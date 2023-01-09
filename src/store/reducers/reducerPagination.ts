import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState } from 'store/initialState';

const updateUrl = createAction<string>('UPDATE_URL');
const nextPage = createAction('NEXT_PAGE');
const prevPage = createAction('PREV_PAGE');
const exactPage = createAction<number>('EXACT_PAGE');
const setSort = createAction<string>('SORT');
const setCount = createAction<number>('COUNT');

const paginationReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateUrl, (state, action) => {
    state.url = action.payload;
  });
  builder.addCase(nextPage, (state) => {
    state.page++;
  });
  builder.addCase(prevPage, (state) => {
    state.page--;
  });
  builder.addCase(exactPage, (state, action) => {
    state.page = action.payload;
  });
  builder.addCase(setSort, (state, action) => {
    state.sort = action.payload;
  });
  builder.addCase(setCount, (state, action) => {
    state.count = action.payload;
  });
});

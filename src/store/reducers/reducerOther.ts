import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState } from 'store/initialState';

const setMinimazed = createAction('UPDATE_MIN');
const setCardId = createAction<string>('CARD_ID');

const otherReducer = createReducer(initialState, (builder) => {
  builder.addCase(setMinimazed, (state) => {
    state.min === true ? (state.min = false) : (state.min = true);
  });
  builder.addCase(setCardId, (state, action) => {
    state.id = action.payload;
  });
});

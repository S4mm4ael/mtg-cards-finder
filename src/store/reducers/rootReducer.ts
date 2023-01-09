import { combineReducers } from '@reduxjs/toolkit';
import otherReducer from './reducerOther';
import paginationReducer from './reducerPagination';
import searchReducer from './reducerSearch';

const rootReducer = combineReducers({
  otherReducer,
  paginationReducer,
  searchReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

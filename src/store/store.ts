import { configureStore, createStore } from '@reduxjs/toolkit';
import paginationReducer from './reducers/reducerPagination';

const store = configureStore();

export default store;

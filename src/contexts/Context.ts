/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const GlobalContext = createContext({
  setUrl: (c: string) => {},
  setMin: (c: boolean) => {},
  setPage: (c: boolean) => {},
  setSort: (c: string) => {},
  setExactPage: (c: number) => {},
  state: { url: '', min: false, page: 1, sort: '' },
});

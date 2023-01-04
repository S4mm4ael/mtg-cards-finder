/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const GlobalContext = createContext({
  setUrl: (c: string) => {},
  setMin: (c: boolean) => {},
  setPage: (c: boolean) => {},
  setSort: (c: string) => {},
  setCount: (c: number) => {},
  setExactPage: (c: number) => {},
  setCardId: (c: string) => {},
  setIsSearching: (c: boolean) => {},
  state: { url: '', min: false, page: 1, sort: '', count: 100, id: '', isSearching: false },
});

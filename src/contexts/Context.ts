import { createContext } from 'react';

export const GlobalContext = createContext({
  setUrl: (c: string) => {},
  setMin: (c: boolean) => {},
  setPage: (c: boolean) => {},
  state: { url: '', min: false, page: 1 },
});

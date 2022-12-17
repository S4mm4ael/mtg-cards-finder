import { createContext } from 'react';

export const GlobalContext = createContext({
  setUrl: (c: string) => {},
  setMin: (c: boolean) => {},
  state: { url: '', min: false },
});

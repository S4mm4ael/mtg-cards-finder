import { createContext } from 'react';

export const GlobalContext = createContext({ url: '', setUrl: (c: string) => {} });

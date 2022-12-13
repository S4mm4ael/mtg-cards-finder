import { createContext, useContext } from 'react';

export type GlobalContext = {
  url: string;
  setUrl: (url: string) => void;
};

export const GlobalContext = createContext<GlobalContext>({
  url: 'https://api.magicthegathering.io/v1/cards?page=$10&pageSize=$10',
  setUrl: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

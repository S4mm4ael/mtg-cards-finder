import { Dispatch, SetStateAction } from 'react';

export interface ICard {
  id: string;
  name: string;
  types?: string[];
  colors: string[];
  imageUrl?: string;
  image?: File | null;
  min?: boolean;
  passSelectedCard?: Dispatch<SetStateAction<string>>;
}

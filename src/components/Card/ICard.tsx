export interface ICard {
  id: number;
  name: string;
  types: string[];
  incollection: boolean;
  colors: string[];
  date: string;
  imageUrl: string;
  image?: File | null;
}

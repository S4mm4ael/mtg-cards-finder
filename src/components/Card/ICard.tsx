export interface ICard {
  id?: string;
  name?: string;
  types?: string[];
  colors?: string[];
  imageUrl?: string;
  image?: File | null;
}

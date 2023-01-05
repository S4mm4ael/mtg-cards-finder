export interface ICard {
  id: string;
  name: string;
  type?: string;
  types: string[];
  colors: string[];
  imageUrl?: string;
  image?: File | null;
}

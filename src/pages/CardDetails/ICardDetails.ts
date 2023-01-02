export interface ICardDetails {
  id: string;
  name: string;
  type?: string;
  types: string[];
  colors: string[];
  imageUrl: string;
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  printings: string[];
  legalities: { format: string; legality: string }[]
}

export default ICardDetails
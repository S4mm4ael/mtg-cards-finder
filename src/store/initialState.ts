interface CounterState {
  url: string;
  min: boolean;
  page: number;
  sort: string;
  count: number;
  id: string;
  isSearching: boolean;
  query: string;
}

export const initialState: CounterState = {
  url: 'https://api.magicthegathering.io/v1/cards',
  min: false,
  page: 1,
  sort: 'A-Z',
  count: 10,
  id: '',
  isSearching: false,
  query: '',
};

export enum ActionKind {
  // Pagination
  UpdateUrl = 'UPDATE_URL',
  NextPage = 'NEXT_PAGE',
  PrevPage = 'PREV_PAGE',
  ExactPage = 'EXACT_PAGE',
  Sort = 'SORT',
  Count = 'COUNT',
  // Other
  UpdateMin = 'UPDATE_MIN',
  CardId = 'CARD_ID',
  // Search
  IsSearching = 'IS_SEARCHING',
  SetQuery = 'SET_QUERY',
}
export type State = {
  url: string;
  min: boolean;
  page: number;
  sort: string;
  count: number;
  id: string;
  isSearching: boolean;
  query: string;
};

export type Action = {
  type: ActionKind;
  payload: string | number | boolean;
};

export const updateActionMin: Action = {
  type: ActionKind.UpdateMin,
  payload: '',
};

export const updateActionUrl: Action = {
  type: ActionKind.UpdateUrl,
  payload: '',
};

export const NextPage: Action = {
  type: ActionKind.NextPage,
  payload: 'next',
};

export const PrevPage: Action = {
  type: ActionKind.PrevPage,
  payload: 'prev',
};

export const ExactPage: Action = {
  type: ActionKind.ExactPage,
  payload: 1,
};

export const Sort: Action = {
  type: ActionKind.Sort,
  payload: 'A-Z',
};

export const Count: Action = {
  type: ActionKind.Count,
  payload: 100,
};

export const CardId: Action = {
  type: ActionKind.CardId,
  payload: '',
};

export const IsSearching: Action = {
  type: ActionKind.IsSearching,
  payload: false,
};
export const SetQuery: Action = {
  type: ActionKind.SetQuery,
  payload: '',
};

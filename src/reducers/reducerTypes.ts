export enum ActionKind {
  UpdateUrl = 'UPDATE_URL',
  UpdateMin = 'UPDATE_MIN',
  NextPage = 'NEXT_PAGE',
  PrevPage = 'PREV_PAGE',
}
export type State = {
  url: string;
  min: boolean;
  page: number;
};

export type Action = {
  type: ActionKind;
  payload: string;
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

export enum ActionKind {
  UpdateUrl = 'UPDATE_URL',
  UpdateMin = 'UPDATE_MIN',
}
export type State = {
  url: string;
  min: boolean;
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
  payload: 'https://api.magicthegathering.io/v1/cards?page=$2&pageSize=$10',
};

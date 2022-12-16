export enum ActionKind {
  UpdateUrl = 'UPDATE_URL',
  UpdateMin = 'UPDATE_MIN',
}

export type Action = {
  type: ActionKind;
};

export const updateAction: Action = {
  type: ActionKind.UpdateMin,
};

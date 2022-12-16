export type State = {
  value: string;
};
enum ActionKind {
  Update = 'UPDATE',
}

export type Action = {
  type: ActionKind;
  payload: string;
};

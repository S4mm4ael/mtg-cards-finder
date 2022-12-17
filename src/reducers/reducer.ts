import { Action, ActionKind, State } from './reducerTypes';

export function reducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.UpdateMin:
      state.min === true ? (state.min = false) : (state.min = true);
      return { ...state };
    case ActionKind.UpdateUrl:
      state.url = payload;
      return { ...state };
    default:
      return state;
  }
}

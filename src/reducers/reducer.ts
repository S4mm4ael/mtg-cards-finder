import { Action, ActionKind, State } from './reducerTypes';

export function reducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.UpdateMin:
      state.min === true ? (state.min = false) : (state.min = true);
      return { ...state, payload };
    case ActionKind.UpdateUrl:
      state.url = payload.toString();
      return { ...state, payload };
    case ActionKind.NextPage:
      state.page = state.page + 1;
      return { ...state, payload };
    case ActionKind.PrevPage:
      if (state.page != 1) {
        state.page = state.page - 1;
      }
      return { ...state, payload };
    case ActionKind.ExactPage:
      if (state.page > 0) {
        state.page = +payload;
      }
      return { ...state, payload };
    case ActionKind.Sort:
      state.sort = payload.toString();
      return { ...state, payload };
    case ActionKind.Count:
      state.count = +payload;
      return { ...state, payload };
    case ActionKind.CardId:
      state.id = payload.toString();
      return { ...state, payload };
    default:
      return state;
  }
}

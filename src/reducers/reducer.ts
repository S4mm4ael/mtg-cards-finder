import { Action, ActionKind } from './reducerTypes';

export function reducer(state: boolean, action: Action) {
  const { type } = action;

  switch (type) {
    case ActionKind.UpdateMin:
      console.log('updated');
      state === true ? (state = false) : (state = true);
      return state;

    default:
      return state;
  }
}

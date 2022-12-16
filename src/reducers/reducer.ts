import { Action, State } from './reducerTypes';

export function reducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}

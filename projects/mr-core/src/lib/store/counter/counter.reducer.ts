import { createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from './counter.actions';

export const counterFeatureKey = 'counter';

export const initialState = {
  counter: 0,
};

export type State = typeof initialState;
export type CounterFeatureState = { [counterFeatureKey]: State };

export const reducer = createReducer(
  initialState,
  on(increment, (state): State => ({ counter: state.counter + 1 })),
  on(decrement, (state): State => ({ counter: state.counter - 1 })),
  on(reset, (): State => initialState)
);

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { counterFeatureKey, State } from './counter.reducer';

export const selectCounterFeature = createFeatureSelector<State>(counterFeatureKey);
export const selectCounter = createSelector(selectCounterFeature, (state) => state.counter);

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterFeatureKey, reducer } from './counter.reducer';

@NgModule({
  imports: [StoreModule.forFeature(counterFeatureKey, reducer)],
})
export class CounterModule {}

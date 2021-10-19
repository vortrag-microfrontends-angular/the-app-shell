import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment } from './counter.actions';
import { selectCounter } from './counter.selectors';

@Injectable({ providedIn: 'root' })
export class CounterFacade {
  public readonly counter$ = this.store.select(selectCounter);

  constructor(private readonly store: Store) {}

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }
}

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { NavigationEntry } from '../models/navigation-entry.interface';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public readonly navigation$: Observable<ReadonlyArray<NavigationEntry>>;

  private readonly entries: Array<NavigationEntry> = [];
  private readonly navigation$$: ReplaySubject<ReadonlyArray<NavigationEntry>> = new ReplaySubject(1);

  constructor() {
    this.navigation$ = this.navigation$$.asObservable();
  }

  public addEntry(entry: NavigationEntry): void {
    if (!entry.weight) {
      entry.weight = 0;
    }

    this.entries.push(entry);
    this.navigation$$.next(this.buildNavigation());
  }

  private buildNavigation(): ReadonlyArray<NavigationEntry> {
    return [...this.entries].sort((e1, e2) => e1.weight! - e2.weight!);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RandomJokeModule } from '@mr-talk/jokes';
import { NavigationService } from '@mr-talk/mr-core';

import { Page2Component } from './page2.component';

@NgModule({
  declarations: [Page2Component],
  exports: [Page2Component],
  imports: [CommonModule, MatButtonModule, RandomJokeModule],
})
export class Page2Module {
  constructor(private readonly navigationService: NavigationService) {
    this.navigationService.addEntry({ commands: ['page2'], label: 'Page2' });
  }
}

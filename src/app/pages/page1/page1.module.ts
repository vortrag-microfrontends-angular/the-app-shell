import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '@mr-talk/mr-core';

import { Page1Component } from './page1.component';

@NgModule({
  declarations: [Page1Component],
  exports: [Page1Component],
  imports: [CommonModule, MatButtonModule],
})
export class Page1Module {
  constructor(private readonly navigationService: NavigationService) {
    this.navigationService.addEntry({ commands: ['page1'], label: 'Page1' });
  }
}

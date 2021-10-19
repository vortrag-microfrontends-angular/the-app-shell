import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '@mr-talk/mr-core';

import { Page3Component } from './page3.component';

@NgModule({
  declarations: [Page3Component],
  imports: [CommonModule, MatButtonModule],
})
export class Page3Module {
  constructor(private readonly navigationService: NavigationService) {
    this.navigationService.addEntry({ commands: ['page3'], label: 'Page3' });
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationService } from '@mr-talk/mr-core';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {
  constructor(private readonly navigationService: NavigationService) {
    this.navigationService.addEntry({ commands: '', label: 'Home' });
  }
}

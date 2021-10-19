import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page1Module } from './pages/page1/page1.module';
import { Page2Component } from './pages/page2/page2.component';
import { Page2Module } from './pages/page2/page2.module';
import { Page3Component } from './pages/page3/page3.component';
import { Page3Module } from './pages/page3/page3.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: 'page3',
    component: Page3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, Page1Module, Page2Module, Page3Module],
  exports: [RouterModule],
})
export class AppRoutingModule {}

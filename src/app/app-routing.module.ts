import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page1Module } from './pages/page1/page1.module';
import { Page2Component } from './pages/page2/page2.component';
import { Page2Module } from './pages/page2/page2.module';

export const routes: Routes = [
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
    path: 'jokes',
    loadChildren: () => import('@mr-talk/jokes').then((m) => m.Page3Module),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomeModule,
    Page1Module,
    Page2Module,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

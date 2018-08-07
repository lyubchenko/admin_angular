import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {} from ''

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      preloadingStrategy: NoPreloading,
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}

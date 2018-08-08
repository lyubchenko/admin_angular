import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tables',
        loadChildren: './modules/tables-pages/tables-pages.module#TablesPagesModule'
      }
    ]
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

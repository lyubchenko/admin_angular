import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tables',
        loadChildren: './modules/tables-pages/tables-pages.module#TablesPagesModule'
      },
      {
        path: 'forms',
        loadChildren: './modules/forms-pages/forms-pages.module#FormsPagesModule'
      },
      {
        path: 'additional_pages',
        loadChildren: './modules/additional-pages/additional-pages.module#AdditionalPagesModule'
      },
      {
        path: 'chart',
        loadChildren: './modules/chart-pages/chart-pages.module#ChartPagesModule'
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

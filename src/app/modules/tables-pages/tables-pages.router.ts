import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import {TablesDynamicPageComponent} from './tables-dynamic-page/tables-dynamic-page.component';
import {TablesPageComponent} from './tables-page/tables-page.component';

const tablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TablesPageComponent
      },
      {
        path: 'tables_dynamic',
        pathMatch: 'full',
        component: TablesDynamicPageComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(tablesRoutes)
  ],
  exports: [RouterModule]
})
export class TablesRoutingModule {}

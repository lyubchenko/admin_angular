import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { TablesPageComponent } from './tables-page/tables-page.component';

const tablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TablesPageComponent
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
export class TablesPagesRoutingModule {}

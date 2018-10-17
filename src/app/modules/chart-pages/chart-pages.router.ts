import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// component
import { D3ChartPageComponent } from './d3-chart/d3-chart-page.component';

const chartRoutes: Routes = [
  {
    path: 'd3',
    pathMatch: 'full',
    component: D3ChartPageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(chartRoutes)
  ],
  exports: [RouterModule]
})
export class ChartPagesRoutingModule {}

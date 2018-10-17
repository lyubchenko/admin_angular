import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartPagesRoutingModule } from './chart-pages.router';
// component
import { D3ChartPageComponent } from './d3-chart/d3-chart-page.component';

@NgModule({
  imports: [
    CommonModule,
    ChartPagesRoutingModule
  ],
  declarations: [
    D3ChartPageComponent
  ],
  exports: [
    CommonModule,
    D3ChartPageComponent
  ]
})
export class ChartPagesModule {}

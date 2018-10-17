import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesPagesRoutingModule} from './tables-pages.router';

// component
import {TablesPageComponent} from './tables-page/tables-page.component';
import {TablesDynamicPageComponent} from './tables-dynamic-page/tables-dynamic-page.component';


@NgModule({
  imports: [
    CommonModule,
    TablesPagesRoutingModule
  ],
  declarations: [
    TablesPageComponent,
    TablesDynamicPageComponent
  ],
  exports: [
    CommonModule,
  ]
})
export class TablesPagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule} from './tables-pages.router';

// component
import {TablesPageComponent} from './tables-page/tables-page.component';
import {TablesDynamicPageComponent} from './tables-dynamic-page.component/tables-dynamic-page.component';


@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  declarations: [
    TablesPageComponent,
    TablesDynamicPageComponent
  ],
  exports: [
    CommonModule,
    TablesPageComponent,
    TablesDynamicPageComponent
  ]
})
export class TablesPagesModule {}

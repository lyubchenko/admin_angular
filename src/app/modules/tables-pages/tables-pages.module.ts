import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesPagesRoutingModule} from './tables-pages.router';

// module
import { SharedModule } from '@shared/shared.module';

// component
import {TablesPageComponent} from './tables-page/tables-page.component';
import {TablesDynamicPageComponent} from './tables-dynamic-page/tables-dynamic-page.component';


@NgModule({
  imports: [
    CommonModule,
    TablesPagesRoutingModule,
    SharedModule
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

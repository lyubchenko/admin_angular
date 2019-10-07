import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesPagesRoutingModule} from './tables-pages.router';

// module
import { SharedModule } from '@shared/shared.module';
import { MaterialAppModule } from '../../ngmaterial.module';

// service
import { TablesService } from './services/tables.service';

// component
import {TablesPageComponent} from './tables-page/tables-page.component';


@NgModule({
  imports: [
    CommonModule,
    TablesPagesRoutingModule,
    SharedModule,
    MaterialAppModule
  ],
  declarations: [
    TablesPageComponent
  ],
  providers: [
    TablesService
  ]
})
export class TablesPagesModule {}

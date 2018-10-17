import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalPagesRoutingModule } from './additional-pages.router';
// component
import { ECommercePageComponent } from './e-commerce/e-commerce-page.component';
import { ProjectPageDetailComponent } from './project-detail/project-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdditionalPagesRoutingModule
  ],
  declarations: [
    ECommercePageComponent,
    ProjectPageDetailComponent
  ],
  exports: [
    CommonModule
  ]
})
export class AdditionalPagesModule {}

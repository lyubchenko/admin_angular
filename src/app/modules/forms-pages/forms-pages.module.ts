import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPagesRoutingModule } from './forms-pages.router';

import { FormsPageComponent } from './forms-page/forms-page.component';
import { FormWizardsPageComponent } from './form-wizards-page/form-wizards-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsPagesRoutingModule
  ],
  declarations: [
    FormWizardsPageComponent,
    FormsPageComponent
  ],
  exports: [
    CommonModule
  ]
})
export class FormsPagesModule {}

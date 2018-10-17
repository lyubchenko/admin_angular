import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { FormsPageComponent } from './forms-page/forms-page.component';
import { FormWizardsPageComponent } from './form-wizards-page/form-wizards-page.component';

const formsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormsPageComponent
  },
  {
    path: 'form_wizards',
    pathMatch: 'full',
    component: FormWizardsPageComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(formsRoutes)
  ],
  exports: [RouterModule]
})
export class FormsPagesRoutingModule {}

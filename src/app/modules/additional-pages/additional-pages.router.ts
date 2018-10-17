import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { ECommercePageComponent } from './e-commerce/e-commerce-page.component';
import { ProjectPageDetailComponent } from './project-detail/project-detail-page.component';

const additionalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ECommercePageComponent
  },
  {
    path: 'project_detail',
    pathMatch: 'full',
    component: ProjectPageDetailComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(additionalRoutes)
  ],
  exports: [RouterModule]
})
export class AdditionalPagesRoutingModule {}

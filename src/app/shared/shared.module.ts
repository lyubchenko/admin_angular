import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

// component
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapseComponent
  ],
  providers: [
    CollapseComponent
  ],
  exports: [
    CollapseComponent
  ]
})
export class SharedModule {}

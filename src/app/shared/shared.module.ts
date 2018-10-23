import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

// component
import { PanelComponent } from './pannel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PanelComponent
  ],
  providers: [
  ],
  exports: [
    PanelComponent
  ]
})
export class SharedModule {}

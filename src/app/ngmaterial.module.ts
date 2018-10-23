import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material component
import { MatExpansionModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // material component
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatExpansionModule,
    MatTableModule
  ]
})
export class MaterialAppModule { }

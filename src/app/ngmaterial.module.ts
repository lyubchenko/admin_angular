import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material component
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // material component
    MatExpansionModule,
  ],
  exports: [
    MatExpansionModule,
  ]
})
export class MaterialAppModule { }

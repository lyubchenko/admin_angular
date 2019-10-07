import { NgModule } from '@angular/core';

// material component
import { MatExpansionModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialAppModule { }

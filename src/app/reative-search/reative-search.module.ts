import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReativeSearchRoutingModule } from './reative-search-routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibSearchComponent
  ],
  imports: [
    CommonModule,
    ReativeSearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReativeSearchModule { }

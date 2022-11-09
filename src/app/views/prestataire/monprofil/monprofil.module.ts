import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonprofilRoutingModule } from './monprofil-routing.module';
import { MonprofilComponent } from './monprofil/monprofil.component';


@NgModule({
  declarations: [
    MonprofilComponent
  ],
  imports: [
    CommonModule,
    MonprofilRoutingModule
  ]
})
export class MonprofilModule { }

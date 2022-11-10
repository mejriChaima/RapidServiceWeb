import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilsRoutingModule } from './accueils-routing.module';
import { AccueilsComponent } from './accueils/accueils.component';


@NgModule({
  declarations: [
    AccueilsComponent
  ],
  imports: [
    CommonModule,
    AccueilsRoutingModule
  ]
})
export class AccueilsModule { }

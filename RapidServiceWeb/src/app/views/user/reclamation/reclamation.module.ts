import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
  ]
})
export class ReclamationModule { }

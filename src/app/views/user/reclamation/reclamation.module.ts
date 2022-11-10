import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule } from '@angular/forms';
import { MesreclamationComponent } from './mesreclamation/mesreclamation.component';


@NgModule({
  declarations: [
    ReclamationComponent,
    MesreclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
  ]
})
export class ReclamationModule { }

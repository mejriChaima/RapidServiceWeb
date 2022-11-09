import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule } from '@angular/forms';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';


@NgModule({
  declarations: [
    ReclamationComponent,
    ListReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
  ]
})
export class ReclamationModule { }

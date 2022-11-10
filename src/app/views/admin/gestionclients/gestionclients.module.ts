import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionclientsRoutingModule } from './gestionclients-routing.module';
import { GestionclientsComponent } from './gestionclients/gestionclients.component';


@NgModule({
  declarations: [
    GestionclientsComponent
  ],
  imports: [
    CommonModule,
    GestionclientsRoutingModule,
    FormsModule
  ]
})
export class GestionclientsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionprestataireRoutingModule } from './gestionprestataire-routing.module';
import { GestionprestataireComponent } from './gestionprestataire/gestionprestataire.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionprestataireComponent
  ],
  imports: [
    CommonModule,
    GestionprestataireRoutingModule,
    FormsModule
  ]
})
export class GestionprestataireModule { }

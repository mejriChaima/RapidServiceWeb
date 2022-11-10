import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionprestataireComponent } from './inscriptionprestataire/inscriptionprestataire.component';
import { InscriptionclientComponent } from './inscriptionclient/inscriptionclient.component';


@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionprestataireComponent,
    InscriptionclientComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    FormsModule
  ]
})
export class InscriptionModule { }

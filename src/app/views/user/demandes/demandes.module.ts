import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { FormsModule } from '@angular/forms';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { PasserdemandeComponent } from './passerdemande/passerdemande.component';


@NgModule({
  declarations: [

    MesdemandesComponent,
    PasserdemandeComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule,
    FormsModule,
   
    
  ]
})
export class DemandesModule { }

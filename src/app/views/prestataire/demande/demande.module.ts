import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { DemandeComponent } from './demande/demande.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemandeComponent
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,
    FormsModule,
  ]
})
export class DemandeModule { }

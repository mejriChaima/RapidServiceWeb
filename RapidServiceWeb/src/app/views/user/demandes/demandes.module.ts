import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { DemandesComponent } from './demandes/demandes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemandesComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule,
    FormsModule
    
  ]
})
export class DemandesModule { }

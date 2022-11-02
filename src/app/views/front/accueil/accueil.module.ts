import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    FormsModule
  ]
})
export class AccueilModule { }
